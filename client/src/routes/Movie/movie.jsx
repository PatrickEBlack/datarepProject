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
  // Select Category to show from dropdown Menu
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        let URL = baseURL;
        if (selectedCategory) {
          // Search for selected category in Data File
          URL += `?category=${selectedCategory}`;
        }

        // Stores baseURL in response
        const response = await fetch(URL);
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
  }, [selectedCategory]);

  return (
    <div>
      <h1>Movies</h1>
      <p>
        {/* Grab Data */}
        Node JS Section. "Add Movie" Fucntion Here later.
      </p>
      <h2>Data Display</h2>

      {/* className filters used in index.css */}
      <div className="filters">
        <label>Categories</label>
        {/* Grab the Value of the selected Category */}
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          {/* Lables For Movie Categories */}
          <option value="">All</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="documentary">Documentary</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="thriller">Thriller</option>
        </select>
      </div>

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
