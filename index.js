const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

//Course Data
const courses = require("./data/courses.json");
const categories = require("./data/categories.json")
// API Loading
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const catagory_course = courses.find((item) => item.catagory_id == id);
  // console.log(catagory_news);
  res.send(catagory_course);
});


app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  console.log(courses);
  const selectedCourse = courses.find((item) => item._id == id);
  console.log(selectedCourse);
  res.send(selectedCourse);
});

// Initial message
app.get("/", (req, res) => {
  res.send("Learn With Fun!");
});
app.get('/courses-categories', (req, res) => {
  res.send(categories);
});
app.listen(port, () => {
  console.log("Learn with Fun site running on port:", port);
});
