import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NoImageSelected from "../../assets/image-not-found.png";

// Edit Movie Function
function EditMovie() {
  const navigate = useNavigate();
  const urlSlug = useParams();
  const baseURL = `http://localhost:8000/api/movies/${urlSlug.slug}`;

  const [movieID, setMovieID] = useState("");

  // Hooks for movie attributes
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [stars, setStars] = useState(0);
  const [description, setDescription] = useState("");
  const [genres, setGenre] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [image, setImage] = useState("");

  const [thumbnail, setThumbnail] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(baseURL);

      if (!response) {
        throw new Error("Failed to fetch Data!");
      }

      const data = await response.json();
      console.log(data);

      {
        data.map((element) => {
          // Sets Movie id into the "_id" parameter in database
          setMovieID(element._id);

          // Sets data in given parameters
          setTitle(element.title);
          setSlug(element.slug);
          setStars(element.stars);
          setGenre(element.genre);
          setDescription(element.description);
          setThumbnail(element.thumbnail);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle form submission for updated Movie
  const createMovie = async (e) => {
    e.preventDefault();

    // Prepare Data for sending to MongoDB database
    const formData = new FormData();

    formData.append("movieID", movieID);
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("stars", stars);
    formData.append("description", description);
    formData.append("genre", genres);

    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    // Puts data to server
    try {
      const response = await fetch("http://localhost:8000/api/movies", {
        // PUT used for updating
        method: "PUT",
        body: formData,
      });

      // If data is received, do the following
      if (response.ok) {
        setTitle("");
        setSlug("");
        // setThumbnail(null);
        setSubmitted(true);
        console.log("Movie added successfully!");
      } else {
        // Log an error if it occurs
        console.log("Failed to submit data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Updates the image and thumbnail when an image is selected by the user
  const changeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      // Set image as selected image
      setImage(URL.createObjectURL(e.target.files[0]));
      setThumbnail(e.target.files[0]);
    }
  };

  // Updates the genre when receiving input into the genre field
  const changeGenre = (e) => {
    setGenre(e.target.value.split(",").map((genre) => genre.trim()));
  };

  // Delete movie functionality
  const removeMovie = async (e) => {
    e.preventDefault();
    try {
      // Attempts to fetch a movie from the database based on it'a unique ID
      const response = await fetch(
        "http://localhost:8000/api/movies/" + movieID,
        {
          // Uses the delete method
          method: "DELETE",
        }
      );

      // If successful, navigate to the movies page and display Movie deleted to the console
      if (response.ok) {
        navigate("/movie");
        console.log("Movie Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Edit Movie</h1>

      {/* add a button for removing movies */}
      <button onClick={removeMovie} className="delete">
        Delete Movie
      </button>

      {submitted ? (
        <p>Data Submitted Successfully!</p>
      ) : (
        // create a new movie once data is submitted
        <form className="moviedetails" onSubmit={createMovie}>
          <div className="col-1">
            <label>
              <b>Change Thumbnail:</b>
            </label>

            {image ? (
              <img src={`${image}`} alt="preview image" />
            ) : (
              <img
                src={`http://localhost:8000/uploads/${thumbnail}`}
                alt="preview image"
              />
            )}

            {/* Input field for thumbnail accepts png/jpeg/gif types*/}
            <input
              type="file"
              accept="image/gif, image/jpeg, image/png"
              onChange={changeImage}
            />
          </div>
          <div className="col-2">
            <div>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Slug</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
            <div>
              <label>Stars</label>
              <input
                type="text"
                value={stars}
                onChange={(e) => setStars(e.target.value)}
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                rows="4"
                cols="50"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label>Genres</label>
              <label>Genres (Comma-Separated)</label>
              <input
                type="text"
                value={genres}
                onChange={changeGenre}
                // onChange={(e) => setCategories(e.target.value)}
              />
            </div>

            {/* must add more fields later */}
            <input type="submit" value="Add Movie" />
          </div>
        </form>
      )}
    </div>
  );
}

export default EditMovie;
