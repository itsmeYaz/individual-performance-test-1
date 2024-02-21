const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courseRoutes");

const PORT = process.env.PORT || 8000;

const app = express();

// Use the routes as middleware
app.use("/courses", courseRoutes);
app.get("/", (req, res) => {
  res.send("WELCOME TO ROOT ROUTE OF THE API");
});

mongoose
  .connect("mongodb://localhost:27017/mongo-test")
  .then(() => {
    console.log("Database Connected!");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}...`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
