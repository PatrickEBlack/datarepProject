import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function singleMovie() {
  // Will be populated with all the data recieved from baseURL
  const [movieData, setMovieData] = useState([]);

  const urlSlug = useParams();

  // BaseURL for movie slug (i.e. good-will-hunting)
  const baseURL = `http://localhost:8000/api/movies/${urlSlug.slug}`;

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
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(movieData, null, 2)}</pre>
    </div>
  );
}

export default singleMovie;
