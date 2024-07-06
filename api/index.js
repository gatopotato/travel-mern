const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user_routes");
const authRouter = require("./routes/authRoutes");
const cors = require("cors");
const app = express();
const path = require("path");
app.use(
  cors({
    origin: "https://midorchard-client.vercel.app", // Adjust this to your frontend URL
    // origin: *
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://midorchard-client.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", ["GET", "POST", "PUT", "DELETE"]);
  res.header("Access-Control-Allow-Headers", ["Content-Type", "Authorization"]);
  next();
});

const port = process.env.PORT || 3000;
const cleanupUnverifiedUsers = require("./Utils/cleanupUnverifiedUsers");
const formRoutes = require("./routes/formSubmit");
dotenv.config();

app.use(express.json());

app.use(express.static("../dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname.slice(0,-4), "dist", "index.html"))
});
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname.slice(0,-4), "dist", "index.html"))
});
app.options("*", cors());

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to the database");
    cleanupUnverifiedUsers();
  })
  .catch((e) => {
    console.log("Error connecting to the database");
    console.log(e);
  });

app.use("/", userRouter);
app.use("/auth", authRouter);
app.use("/forms", formRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!!`);
});
