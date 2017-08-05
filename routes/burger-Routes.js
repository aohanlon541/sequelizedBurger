  var db = require("../models");


  module.exports = function(app) {

      app.get("/", function(req, res) {
          db.Burger.findAll().then(function(dbBurger) {
              res.render("index", dbBurger);
          });
      });

      app.post("/", function(req, res) {
          db.Burger.create({
              burger_name: req.body.name,
              devoured: false
          }).then(function(dbBurger) {
              res.redirect("/");
          });
      });

  }