const { mongoose } = require("mongoose");

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    blog: {
      type: String,
      require: true,
      trim: true,
    },
    title: {
      type: String,
      require: true,
      trim: true,
    },
    cover_img: {
      type: String,
      require: true,
      trim: true,
    },
    excerpt: {
      type: String,
      require: true,
      trim: true,
    },

    createdAt: { type: Date, required: true, default: Date.now },
  }
  //   { timestamps: true }
);
const blogs = mongoose.model("blog", blogSchema);
module.exports = blogs;
