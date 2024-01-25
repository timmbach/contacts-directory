require("dotenv").config();
const cors = require("cors");
require("colors");

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

// const contactRouter = require("./routes/routes.js")

const app = express();
const PORT = process.env.PORT || 4000;

// database connection
mongoose.connect(process.env.DB_URI).then((conn) => {
  console.log(
    `Connected to MongoDB server ${conn.connection.host}`.cyan.underline.bold
  );
});

// MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resolve: false,
  })
);
app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

// route
app.use("/", require("./routes/routes.js"));
// app.post;

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
