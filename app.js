/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// !
//const login = require("./routes/user");
//const getMonthlyList = require("./routes/mainpage");
const router = require("./routes/user");
// !
const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://asmallgoodthing.s3-website.ap-northeast-2.amazonaws.com"
  ]
};

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

app.use((req,res,next) => {
  console.log("Serving request type " + req.method + " for url " + req.url);
  next();
});

// ! Route
app.use("/", router);

//app.use("/", login);
// app.use("/", logout);
// app.use("/", signup);
//app.use("/mainpage", getMonthlyList);

/*
const port = 8080
"/" 기초
"/signup"
"/login"
"/logout"
"/mainpage" 
"/listpage"
*/
