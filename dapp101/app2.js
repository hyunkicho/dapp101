const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("token");
});

app.post("/submit", (req, res) => {
  const inputValue = req.body.inputValue;
  console.log(inputValue);
  res.redirect("/");
});

// app.get("/", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://raw.githubusercontent.com/dogeum-network/nft-baseuri/main/metadatas/2"
//     );
//     const data = response.data;
//     res.render("index", { data });
//   } catch (error) {
//     console.error(error);
//     res.send("Error");
//   }
// });

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });
