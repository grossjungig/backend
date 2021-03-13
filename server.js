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

const PORT = process.env.PORT || 5555;

app.listen(process.env.PORT, () => {
  console.log(
    `Express server listening in http://localhost:${PORT}`
  );
});
