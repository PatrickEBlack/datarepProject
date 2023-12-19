import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movie = () => {
  // BaseURL for movie dataset
  const baseURL = "http://localhost:8000/api/movies";
  // Will be populated with all the data recieved from baseURL
  const [movieData, setMovieData] = useState([]);
  // Will check if App is in a Loading State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Stores baseURL in response
        const response = await fetch(baseURL);
        if (!response.ok) {
          // If response is not okay, throw error
          throw new Error("Failed to Fetch data!");
        }

        // Convert data into json
        const jsonData = await response.json();

        setMovieData(jsonData);
        setLoading(false);
      } catch (error) {
        // Console Log The Error
        console.log(error);
        setError("Error Fetching Movie Data!");
        setLoading(false);
      }
    };

    // Invoking fetchMovieData
    fetchMovieData();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <p>
        {/* Grab Data */}
        Node JS Section. "Add Movie" Fucntion Here later.
      </p>
      <h2>Data Display</h2>
      {/* <pre>{JSON.stringify(movieData, null, 2)}</pre> */}

      {/* What we do if we're in a Loading State */}
      {loading ? (
        <p> Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        // If The App is NOT in a Loading State, Do the Following.
        <ul className="movies">
          {movieData.map((item) => (
            // Fetch _id for Movie
            <li key={item._id}>
              <Link to={`movies/${item.slug}`}>
                <img
                  // Image Thumbnail Taken From Uploads Folder
                  src={`http://localhost:8000/uploads/${item.thumbnail}`}
                  alt={item.title}
                />
                {/* Display Title of Movie */}
                <h3>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movie;
