var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET home page. */

// router.get("/nftnumber", async (req, res, next) => {
//   try {
//     let number = req.query.number;
//     const response = await axios.get(
//       `https://raw.githubusercontent.com/dogeum-network/nft-baseuri/main/metadatas/${number}`
//     );
//     const data = response.data;
//     res.render("nft", { data: data });
//   } catch (error) {
//     console.error(error);
//     res.send("Error");
//   }
// });

router.get("/nftnumber", (req, res) => {
  res.render("nftnumber");
});

router.get("/nft", async (req, res) => {
  let number = req.query.number;
  const response = await axios.get(
    `https://raw.githubusercontent.com/dogeum-network/nft-baseuri/main/metadatas/${number}`
  );
  const data = response.data;
  res.render("nft", { data: data });
});

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

router.get("/nftnumber", function (req, res, next) {
  res.render("nftnumber", { title: "nft tutordfial" });
});

// router.get("/vote", function (req, res, next) {
//   res.render("vote", { title: "nft tutordfial"});
// });
module.exports = router;
