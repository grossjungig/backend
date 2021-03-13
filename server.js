require("dotenv").config();
require("./db");

const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: [
      "*", "http://localhost:3000",
      "https://grossjungig-de.vercel.app",
      "https://grossjungig.de",
    ],
    credentials: false,
  })
);

app.use(routes);

// Handle Thrown Errors:
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

const PORT = process.env.PORT || 5555;

app.listen(process.env.PORT, () => {
  console.log(
    `Express server listening in http://localhost:${PORT}`
  );
});
