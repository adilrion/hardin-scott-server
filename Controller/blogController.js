const blogs = require("../Models/blogModels");

exports.getBlog = (req, res) => {
  blogs
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({
        error: "error occurred",
      });
    });
};
exports.getSingleBlog = (req, res) => {};

exports.postBlog = (req, res) => {
  const { blog, title, cover_img, first_column } = req.body;
  console.log(req.body);
  const newBlog = new blogs({
    blog,
    title,
    cover_img,
    first_column,
  });
  newBlog
    .save()
    .then((data) => {
      res.send(data);
      // console.log(data);
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.putBlog = (req, res) => {};
exports.putSingleBlog = (req, res) => {
  const { id } = req.params;
  const { blog } = req.body;
  blogs
    .findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          blog,
        },
      }
    )
    .then((data) => {
      res.json("update successfully done");
    })
    .catch((error) => {
      res.status(500).json({
        error: "error occurred",
      });
    });
};
exports.deleteBlog = (req, res) => {
  const { id } = req.params;
  blogs
    .findByIdAndDelete(id)
    .then((data) => {
      res.json("Delete Successfully done");
    })
    .catch((error) => {
      res.status(500).json({
        error: "error occurred",
      });
    });
};
