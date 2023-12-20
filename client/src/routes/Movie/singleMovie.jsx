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

  // Function StarRating
  function StarRating({ numberOfStars }) {
    const stars = [];
    // Prints a ⭐ for every i based on the rating in the database
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    // Return Stars
    return <div>Rating: {stars}</div>;
  }

  return (
    <div>
      {/* Link back to Movies Page */}
      <Link to={"/movie"}>⬅ Movies</Link>
      {movieData.map((element) => (
        <div className="moviedetails">
          <div className="col-1">
            <img
              // Source of image from localhost:8000
              src={`http://localhost:8000/uploads/${element.thumbnail}`}
              alt={element.title}
            />
            <br />

            {/* link to edit Movies, Not done yet */}
            <Link to={`/editMovie/${element.slug}`}>✏ Edit</Link>
          </div>
          <div className="col-2">
            {/* Display Movie Title */}
            <h1>{element.title}</h1>
            <p>{element.description}</p>

            {/* Invoke Star Rating */}
            <StarRating numberOfStars={element.stars} />

            {/* Genres Related to Movies */}
            <p>
              <b>Genre</b>
            </p>
            <ul>
              {element.genre.map((item, index) => (
                // Display Genres as a String in upperCase
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
