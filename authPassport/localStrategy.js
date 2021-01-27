const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User");

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    (email, password, done) => {
      console.log("email, password");
      User.findOne({ email: email })
        .then((foundUser) => {
          if (!foundUser) {
            return done(null, false, { message: "Incorrect username." });
          }
          return bcrypt.compare(password, foundUser.password).then((match) => {
            if (!match) {
              return done(null, false, { message: "Incorrect password." });
            }
            done(null, foundUser);
          });
        })
        .catch((err) => {
          done(err);
        });
    }
  )
);
