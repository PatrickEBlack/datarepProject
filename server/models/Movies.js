const mongoose = require("mongoose");

const Schema = mongoose.schema;
//idk if this will work
const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  description: {
    type: String,
  },
  stars: {
    type: Number,
  },
  genre: {
    type: Array,
  },
  // I forgot to add this for some reason and spent 2 days
  // trying to figure out why user data wouldn't show
  thumbnail: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
