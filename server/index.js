// Will Contain MongoDB Connection String
require("dotenv").config();

const cors = require("cors");

const multer = require("multer");

const express = require("express");

const connectDB = require("./connectDB");

// Import Movies from model folder
const Movie = require("./models/Movies");

// Express stores as app, will be used to start our server
const app = express();

// Set Port as Default or 8000
const PORT = process.env.PORT || 8000;

// Connect to the database
connectDB();

//Middlware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  // destination of image storage
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  // filename for storage
  filename: function (req, file, cb) {
    // creates a unique code for in front of the image name
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

// Using multer to store images, not working at the minute
const upload = multer({ storage: storage });

//Create a Route
app.get("/api/movies", async (req, res) => {
  try {
    // Query the genre and save into genre vairable
    const genre = req.query.genre;

    const filter = {};

    // If there is data in genre, filter.genre will hold the Genre Type
    if (genre) {
      filter.genre = genre;
    }

    // Data from movies
    const movieData = await Movie.find(filter);
    res.json(movieData);
  } catch (error) {
    // Error if Movies cannot be Fetched
    res.status(500).json({ error: "An error occured while fetching Movies " });
  }
});

//Create a Route for detailed information
app.get("/api/movies/:slug", async (req, res) => {
  try {
    // Store slug in slugParam
    const slugParam = req.params.slug;

    // Data from movies
    const movieData = await Movie.find({ slug: slugParam });
    res.json(movieData);
  } catch (error) {
    // Error if Movies cannot be Fetched
    res.status(500).json({ error: "An error occured while fetching Movies " });
  }
});

// Send a new movie to the database (WORKING)
app.post("/api/movies", upload.single("thumbnail"), async (req, res) => {
  try {
    // Create a new movie object and set all required variables based on the data in the database
    const newMovie = new Movie({
      title: req.body.title,
      slug: req.body.slug,
      stars: req.body.stars,
      description: req.body.description,
      genre: req.body.genre,
      thumbnail: req.file.filename,
    });

    await newMovie.save();
    // Prompt comfirming Movie Creation
    res.status(201).json({ message: "Movie Created" });
  } catch (error) {
    // Error if Movies cannot be Fetched
    res.status(500).json({ error: "An error occured while fetching Movies " });
  }
});

// Edit an existing movie in the MongoDB Database
app.put("/api/movies", upload.single("thumbnail"), async (req, res) => {
  try {
    const movieID = req.body.movieID;

    const updateMovie = {
      title: req.body.title,
      slug: req.body.slug,
      stars: req.body.stars,
      description: req.body.description,
      genre: req.body.genre,
    };

    // If a request for a new thumbnail is submitted, change thumbnail
    // If not, leave the thumbnail as it currently is
    if (req.file) {
      updateMovie.thumbnail = req.file.filename;
    }

    // Finds Movie by ID
    await Movie.findByIdAndUpdate(movieID, updateMovie);
    // Prompt comfirming Movie Creation
    res.status(201).json({ message: "Movie Updated Successfully" });
  } catch (error) {
    // Error if Movies cannot be Fetched
    res.status(500).json({ error: "An error occured while updating Movie!" });
  }
});

// Add delete functionality

app.get("/", (req, res) => {
  // Response to localhost:8000
  res.json("Hello World");
});
app.get("*", (req, res) => {
  // Error 404 for Unknown Directories
  res.sendStatus("404");
});

// Listen to PORT (8000)
app.listen(PORT, () => {
  // Console Log Port Number
  console.log(`Server is running on Port: ${PORT}`);
});
