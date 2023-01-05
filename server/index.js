const express = require("express");
const cors = require("cors");
const DeviceRoutes = require("./routes/DeviceRoutes");
const UserRoutes = require("./routes/UserRoutes");

const PORT = process.env.PORT || 5002;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", UserRoutes);
app.use("/devices", DeviceRoutes);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
