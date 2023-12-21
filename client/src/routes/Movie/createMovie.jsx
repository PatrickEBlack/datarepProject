import { useState } from "react";
import NoImageSelected from "../../assets/image-not-found.png";

// Create Movie Function
function CreateMovie() {
  // Hooks for movie attributes
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [stars, setStars] = useState("");
  const [description, setDescription] = useState("");
  const [genres, setGenre] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [image, setImage] = useState(NoImageSelected);

  const [thumbnail, setThumbnail] = useState(null);

  // Handle form submission for new Movie
  const createMovie = async (e) => {
    e.preventDefault();

    // Prepare Data for sending to MongoDB database
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("stars", stars);
    formData.append("description", description);
    formData.append("genre", genres);
    formData.append("thumbnail", thumbnail);

    // Post data to server
    try {
      const response = await fetch("http://localhost:8000/api/movies", {
        method: "POST",
        body: formData,
      });

      // If data is received, do the following
      if (response.ok) {
        setTitle("");
        setSlug("");
        setThumbnail(null);
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

  return (
    <div>
      <h1>Create Movie</h1>

      {submitted ? (
        <p>Data Submitted Successfully!</p>
      ) : (
        // create a new movie once data is submitted
        <form className="moviedetails" onSubmit={createMovie}>
          <div className="col-1">
            <label>
              <b>Upload Thumbnail:</b>
            </label>
            <img src={image} alt="preview image" />
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

export default CreateMovie;
