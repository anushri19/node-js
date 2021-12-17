const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const fs = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// apiDocs
app.get("/api", (req, res) => {
  res.json({ name: "Mohit" });
});

// middleware -
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
// app.use(function(err, req, res, next) {
//     if (err.name === 'UnauthorizedError') {
//         res.status(401).json({ error: 'Unauthorized!' });
//     }
// });

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`A Node Js API is listening on port: ${port}`);
});