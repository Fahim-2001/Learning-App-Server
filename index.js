const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

//Course Data
const courses = require("./data/courses.json");

// API Loading
app.get("/courses", (req, res) => {
  res.send(courses);
});

// Initial message
app.get("/", (req, res) => {
  res.send("Learn With Fun!");
});

app.listen(port, () => {
  console.log("Learn with Fun site running on port:", port);
});
