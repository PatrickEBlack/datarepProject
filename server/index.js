// Will Contain MongoDB Connection String
require("dotenv").config();

const cors = require("cors");

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

//Create a Route
app.get("/api/movies", async (req, res) => {
  try {
    const category = req.query.category;

    const filter = {};

    // If there is data in category, filter.category will hold the Category Type
    if (category) {
      filter.category = category;
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
