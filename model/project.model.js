const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  client: {
    name: {
      type: String,
    },
    logo: {
      type: String,
    },
  },
  projectType: {
    type: String,
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
  role: {
    type: String,
  },
  summary: {
    type: String,
  },
  challenge: {
    type: String,
  },
  solution: {
    type: String,
  },

  technologies: {
    type: [String],
  },
  thumbnail: {
    type: String,
  },
  url: {
    type: String,
  },
  images: {
    type: [String],
  },
});
module.exports = mongoose.model("Project", projectSchema);
