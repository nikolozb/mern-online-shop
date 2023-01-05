const express = require("express");
const router = express.Router();
const DeviceControllers = require("../controllers/DeviceControllers");

router.get("/", DeviceControllers.getDevice);
router.post("/", DeviceControllers.createDevice);

module.exports = router;
