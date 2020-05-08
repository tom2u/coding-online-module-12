const express = require("express");
const db = require("./db/database.js");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });
const jsonParser = express.json();

app.use("/api", apiRoutes);

// Express middleware
app.use(urlencodedParser);
app.use(jsonParser);

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
