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

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((item) => item.id == id);
  console.log(selectedCourse);
  res.send(selectedCourse);
});

// Initial message
app.get("/", (req, res) => {
  res.send("Learn With Fun!");
});

app.listen(port, () => {
  console.log("Learn with Fun site running on port:", port);
});
