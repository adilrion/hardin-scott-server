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
exports.getSingleBlog = (req, res) => {
  const { id } = req.params;
  blogs
    .findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({
        error: "error occurred",
      });
    });
};

exports.postBlog = (req, res) => {
  const { blog, title, cover_img, excerpt } = req.body;
  const newBlog = new blogs({
    blog,
    title,
    cover_img,
    excerpt,
  });
  newBlog
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.putBlog = (req, res) => {};
exports.putSingleBlog = (req, res) => {
  const { id } = req.params;
  const { title, cover_img, excerpt, blog } = req.body;
  blogs
    .updateOne(
      { _id: id },
      {
        $set: {
          title,
          cover_img,
          excerpt,
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
