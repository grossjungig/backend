const passport = require("passport");
require("./serializers");
require("./localStrategy");
module.exports = (app) => {
  app.use("/api", passport.initialize());
  app.use("/api", passport.session());
};
