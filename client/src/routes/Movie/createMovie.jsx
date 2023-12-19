import React, { useState } from "react";
import NoImageSelected from "../../assets/image-not-found.png";

// Create Movie Function
function createMovie() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  return (
    <div>
      <h1>Create Movie</h1>
      <p>This is where I will put data</p>

      {/* Creates a new Movie when Submitted */}
      <form className="moviedetails" onSubmit={createMovie}>
        <div className="col-1">
          <label>Upload Thumbnail</label>
          {/* Basic no image logo to show by default */}
          <img src={NoImageSelected} alt="preview image" />
          {/* Files that can be accepted as an input */}
          <input type="file" accept="image/gif, image/jpeg, image/png" />
        </div>
        <div className="col-2">
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              // Sets the title of the movie
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Slug</label>
            <input
              type="text"
              value={slug}
              // Sets the slug of the movie
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
          {/* Add Movie Button */}
          <input type="submit" value="Add Movie" />
        </div>
      </form>
    </div>
  );
}

export default createMovie;
