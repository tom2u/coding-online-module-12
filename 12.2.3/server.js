const sqlite3 = require("sqlite3").verbose();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const urlencodedParser = express.urlencoded({ extended: false });
const jsonParser = express.json();

// Express middleware

app.use(urlencodedParser);
app.use(jsonParser);

// Connect to database
const db = new sqlite3.Database("./db/election.db", (err) => {
  if (err) {
    return console.error(err.message);
  }

  console.log("Connected to the election database.");
});

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.on("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
