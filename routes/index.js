/* We'll centralize our routes imports to this file to keep our code clean */
const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const forgotPasswordRoutes = require("./forgotPassword");
const resetPasswordRoutes = require("./resetPassword");
const updatePasswordRoutes = require("./updatePasswordViaEmail");

// const commentsRoutes = require("./comments");
const roomsRoutes = require("./rooms");
const profilesRoutes = require("./profiles");

// router.get("/", (req, res) => {
//   res.send("This is home");
// });

//To connect frontend and backend, we need to make a route first

router.use("/api/auth", usersRoutes);
router.use("/api", roomsRoutes);
router.use("/api/auth", forgotPasswordRoutes);
router.use("/api", profilesRoutes);
router.use("/resetPassword", resetPasswordRoutes);
router.use("/updatePassword", updatePasswordRoutes);

// router.use("/api", commentsRoutes);

module.exports = router;
