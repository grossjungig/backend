require("dotenv").config();

require("./db"); // will run the code in `./db/index.js` (which is the database connection logic)

// const nodemailer = require("nodemailer");
const express = require("express");
const fileUpload = require("express-fileupload");
const winston = require("winston");
const expressWinston = require("express-winston");
const logger = require("morgan");
const cors = require("cors");
const pkg = require("./package.json");
const routes = require("./routes"); // this is our controller and will manage all the routes so we don't have to register any new route handler here
const passport = require("./authPassport");

const app = express();

passport(app); // setting up authentification

app.use(fileUpload());
// app.use(nodemailer);

app.use(express.urlencoded({ extended: true })); // sets the `body` object in the `request` with the values from an HTML POST form

app.use(express.json()); // sets the `body` object in the `request` with the data coming from a request with a `body` (request we'll issue with axios, fetch...)

// app.use(logger("dev")); // this middleware will log every response that is issued (with the status code) in the console

// app.set("pkg", pkg);

// const { name, author, description } = app.get("pkg");

//app.get("/", (req, res) => res.json({ name, author, description }));

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
      winston.format.prettyPrint()
    ),
    meta: false, // optional: control whether you want to log the meta data about the request (default to true)
    //msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    //expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) {
      return false;
    }, // optional: allows to skip some log messages based on request and/or response
  })
);

app.use(
  cors({
    origin: [
      "*",
      "http://localhost:3000",
      "https://grossjungig-de.vercel.app",
      "https://grossjungig.de", // adding the grossjungig.de to ensure CORS doesn't restrict it
    ],
    credentials: false,
  })
);

app.get("/hello", (req, res) => res.send("hello"));

app.use(routes);

// app.use((req, res) => {
//   res.sendFile(__dirname + "/public/index.html"); // 1. this will be added as part of deployment process in order to allow people to view from any server
// });

app.listen(process.env.PORT, () => {
  console.log(
    `Express server listening in http://localhost:${process.env.PORT}`
  );
});
