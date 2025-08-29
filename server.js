const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config();

const app = express();
const port = process.env.PORT || 5003;

// Configure the database connection (MySQL) --------------------------
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test database connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    process.exit(1);
  }
  console.log("Connected to database.");
});
// Define routes -------------------------------------------------------

app.get("/", (req, res) => {
  res.send("Hello KomilO !");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
