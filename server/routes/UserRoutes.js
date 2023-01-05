const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/UserControllers");

router.get("/", UserControllers.getUsers);
router.post("/", UserControllers.createUser);
router.delete("/", UserControllers.deleteUser);

module.exports = router;
