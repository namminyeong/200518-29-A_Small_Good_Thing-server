/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const dotenv = require('dotenv').config();

const userRouter = require("./routes/user");
const itemRouter = require("./routes/item");
const getMonthlyList = require("./routes/monthly_list");
const getTotalList = require("./routes/total_list");
const imageRouter = require("./routes/image");
const multiDelete = require("./routes/multiDelete");

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://asmallgoodthing.s3-website.ap-northeast-2.amazonaws.com",
  ],
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_PASSWORD || "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { sameSite: "none" }
  })
);

//simple route
app.get("/", (req, res) => {
  res.status(200).send("Success");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use((req, res, next) => {
  console.log("Serving request type " + req.method + " for url " + req.url);

  const allowedOrigins = [
    "http://localhost:3000",
    "http://asmallgoodthing.s3-website.ap-northeast-2.amazonaws.com",
  ];
  const origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, OPTIONS, PATCH"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );

  return next();
});

// ! Route
app.use("/", userRouter);
app.use("/item", itemRouter);
app.use("/items", multiDelete);
app.use("/monthly_list", getMonthlyList);
app.use("/total_list", getTotalList);
app.use("/image", imageRouter);
