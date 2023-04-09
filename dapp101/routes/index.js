var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Dapp tutorial" });
});

router.get("/ico", function (req, res, next) {
  res.render("ico", { title: "ICO tutorial" });
});

router.get("/nft", function (req, res, next) {
  res.render("nft", { title: "nft tutorial" });
});

router.get("/token", function (req, res, next) {
  res.render("token", { title: "nft tutorial" });
});

router.get("/dao", function (req, res, next) {
  res.render("dao", { title: "dao tutorial"});
});

router.get("/vote", function (req, res, next) {
  res.render("vote", { title: "vote tutorial"});
});
module.exports = router;
