// External Imports
const blog = require("express").Router();

// Internal Imports
const {
  getBlog,
  getSingleBlog,
  postBlog,
  putBlog,
  putSingleBlog,
  deleteBlog,
} = require("../Controller/blogController");

// Router Method
blog.get("/", getBlog);
blog.get("/:id", getSingleBlog);
blog.post("/", postBlog);
blog.put("/", putBlog);
blog.put("/:id", putSingleBlog);
blog.delete("/:id", deleteBlog);
// Exports
module.exports = blog;
