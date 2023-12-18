require("dotenv").config(); //will contain mogodb connection string

const cors = require("cors");

const express = require("express");

const connectDB = require("./connectDB");

const Movie = require("./models/Movies"); //import movies from model folder

const app = express(); //app = express/ used to start our server

const PORT = process.env.PORT || 8000; //set port as default or 8000

connectDB(); //connect to the database
//Middlware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Create a route
app.get("/api/movies", async (req, res) => {
  try {
    const data = await Movie.find(); //data from movies
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured while fetching Movies " });
  }
});

// Create a route
app.get("/api/movies", async (req, res) => {
  try {
    const data = await Movie.find({}); //collects data
    res.json(data); //converts data to a json response for viewing
  } catch (error) {
    res.status(500).json({ error: "An error occured while fetching Movies" });
  }
});

app.get("/", (req, res) => {
  res.json("Hello World"); //response sent to localhost:8000
});
app.get("*", (req, res) => {
  res.sendStatus("404"); //error 404 for unknown directories
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`); //console log, server is running + PORT number
});
