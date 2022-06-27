// External Imports
const art = require("express").Router();

// Internal Imports
const {
  getArt,
  getSingleArt,
  postArt,
  putArt,
  putSingleArt,
  deleteArt,
} = require("../Controller/artController");

// Router Method
art.get("/", getArt);
art.get("/:id", getSingleArt);
art.post("/", postArt);
art.put("/", putArt);
art.put("/:id", putSingleArt);
art.delete("/:id", deleteArt);
// Exports
module.exports = art;
