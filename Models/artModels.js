const { mongoose } = require("mongoose");

const { Schema } = mongoose;

const artSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  art_img: {
    type: String,
    require: true,
    trim: true,
  },
});
const art = mongoose.model("art", artSchema);
module.exports = art;
