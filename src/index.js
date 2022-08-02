const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, "public")));

//morgan logger
app.use(morgan("combined"));

//template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  console.log(req.query);
  res.render("news");
});

app.get("/search", (req, res) => {
  // console.log(req.query);
  res.render("search");
});

app.listen(PORT, () => console.log(`Server running port ${PORT}...`));
