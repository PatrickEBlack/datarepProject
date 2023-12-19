import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function singleMovie() {
  // Will be populated with all the data recieved from baseURL
  const [movieData, setMovieData] = useState([]);

  const { slug } = useParams();

  // BaseURL for movie slug (i.e. good-will-hunting)
  const baseURL = `http://localhost:8000/api/movies/${slug}`;

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Stores slug baseURL in response
        const response = await fetch(baseURL);
        if (!response.ok) {
          // If response is not okay, throw error
          throw new Error("Failed to Fetch data!");
        }

        // Convert data into json
        const jsonData = await response.json();

        setMovieData(jsonData);
      } catch (error) {
        // Console Log The Error
        console.log(error);
      }
    };

    // Invoking fetchMovieData
    fetchMovieData();
  }, [slug]);

  return (
    <div>
      <Link to={"/movie"}>⬅ Movies</Link>
      {movieData.map((element) => (
        <div className="moviedetails">
          <div className="col-1">
            <img
              src={`http://localhost:8000/uploads/${element.thumbnail}`}
              alt={element.title}
            />
            <br />
            {/* edit movie */}
          </div>
          <div className="col-2">
            {/* Display Movie Title */}
            <h1>{element.title}</h1>
            <p>{element.description}</p>
            {/* stars */}
            {/* Categories Related to Movies */}
            <p>
              <b>Category</b>
            </p>
            <ul>
              {element.category.map((item, index) => (
                // Display Categories
                <li key={index}>{item.toString().toUpperCase()}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default singleMovie;
