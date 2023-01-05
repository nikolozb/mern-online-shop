const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const DeviceRoutes = require("./routes/DeviceRoutes");
const UserRoutes = require("./routes/UserRoutes");

dotenv.config();
const PORT = process.env.PORT || 5002;
const DB_URI = process.env.DB_URI;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", UserRoutes);
app.use("/devices", DeviceRoutes);

async function startServer() {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startServer();
