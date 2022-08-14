const express = require("express");
const path = require("path");
const app = express();
const productRouter = require("./app/product/routes");
const port = 3006;
const logger = require("morgan");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api/v1", productRouter);
app.use((req, res, next) => {
  res.status(404);
  // res.setHeader('Content-Type', 'text/plain');
  res.send({
    status: "Failed",
    message: "Resource " + req.originalUrl + " not found",
  });
});

app.listen(process.env.PORT || port, () =>
  console.log("Server: http://localhost:3006")
);
