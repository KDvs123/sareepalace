const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;


main().then(()=> console.log("Mongodb is successfully connected")).catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://admin:Saree123@saree.gau58.mongodb.net/?retryWrites=true&w=majority&appName=saree"
  );

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
