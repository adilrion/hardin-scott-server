const art = require("../Models/artModels");

exports.getArt = (req, res) => {
  art
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
exports.getSingleArt = (req, res) => {};

exports.postArt = (req, res) => {
  const { title, art_img: src } = req.body;
  const newArt = new art({
    title,
    src,
  });
  newArt
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.putArt = (req, res) => {};

exports.putSingleArt = (req, res) => {
  const { id } = req.params;
  const { title, art_img: src } = req.body;

  art
    .updateOne(
      { _id: id },
      {
        $set: {
          title,
          src,
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
exports.deleteArt = (req, res) => {
  const { id } = req.params;
  art
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
