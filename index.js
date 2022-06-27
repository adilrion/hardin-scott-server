// External Import
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Internal Import
const blog = require("./Router/blogRouter");
const art = require("./Router/artRouter");

// Initialization
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
dotenv.config();

// MongoDB Database Connection
mongoose
  .connect(process.env.MONGO_COLLATION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((msg) => {
    console.log("Database connection successfully");
  })
  .catch((err) => {
    console.log(`there wes an something wrong ${err}`);
  });

// Router Parser
app.use(express.json());

// Router
app.use("/blog", blog);
app.use("/art", art);

app.get("/", (req, res) => {
  res.send(`Kabid Hassan`);
});

app.listen(port, () => {
  console.log(`Listening Port ${port}`);
});
