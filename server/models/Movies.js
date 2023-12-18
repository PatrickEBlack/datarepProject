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
  category: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
