const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5003;

app.get("/", (req, res) => {
  res.send("Hello KomilO !");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
