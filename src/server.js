const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user-routes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
