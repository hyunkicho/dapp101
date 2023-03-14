var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Dapp tutordfial" });
});

router.get("/ico", function (req, res, next) {
  res.render("ico", { title: "ICO tutordfial" });
});

router.get("/nft", function (req, res, next) {
  res.render("nft", { title: "nft tutordfial" });
});

router.get("/token", function (req, res, next) {
  res.render("token", { title: "nft tutordfial" });
});

// router.get("/vote", function (req, res, next) {
//   res.render("vote", { title: "nft tutordfial"});
// });
module.exports = router;
