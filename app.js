/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routes/user");
const postItemRouter = require("./routes/mainpage");

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
  res.setHeader("Access-Control-Allow-Origin", [
    "http://localhost:3000",
    "http://asmallgoodthing.s3-website.ap-northeast-2.amazonaws.com",
  ]);
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE, OPTIONS, PATCH"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  next();
});

// ! Route
app.use("/", userRouter);
app.use("/item", postItemRouter);

/*
const port = 8080
"/" 기초
"/signup"
"/login"
"/logout"
"/mainpage" 
"/listpage"
*/
