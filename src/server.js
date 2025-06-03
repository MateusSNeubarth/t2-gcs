const app = require("./app");
const db = require("./config/db");

const PORT = process.env.PORT || 8080;

// Test DB connection
db.authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
