require("dotenv").config();
require("./db");

const express = require("express");
const fileUpload = require("express-fileupload");
const winston = require("winston");
const expressWinston = require("express-winston");
const logger = require("morgan");
const cors = require("cors");
const pkg = require("./package.json");
const routes = require("./routes");
const passport = require("./authPassport");

const app = express();

passport(app);

app.use(fileUpload());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
      winston.format.prettyPrint()
    ),
    meta: false,
    colorize: false,
    ignoreRoute: function (req, res) {
      return false;
    },
  })
);

app.use(
  cors({
    origin: [
      "*",
      "http://localhost:3000",
      "https://grossjungig-de.vercel.app",
      "https://grossjungig.de",
    ],
    credentials: false,
  })
);

app.use(routes);

// app.use((req, res) => {
//   res.sendFile(__dirname + "/public/index.html"); 
// 1. this will be added as part of deployment process in order to allow people to view from any server
// });

app.listen(process.env.PORT, () => {
  console.log(
    `Express server listening in http://localhost:${process.env.PORT}`
  );
});
