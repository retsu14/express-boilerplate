require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const { createUsersTable } = require("./models/user-model");
createUsersTable().then(() => {
  console.log("Users table checked/created.");
}).catch((err) => {
  console.error("Error creating users table:", err);
});

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "UPDATE"],
     allowedHeaders: ["Content-Type", "Authorization", "Bearer"],
}))
app.use(express.urlencoded({ extended: true }));


// these are for the endpoints
app.use("/api/auth", require("./routes/auth-route"));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
