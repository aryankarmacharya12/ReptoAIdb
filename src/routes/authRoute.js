const express = require("express");
const { register, login, getAllUsers } = require("../controllers/authController");
const router = express.Router();

// Route for user registration
router.post("/register", register);

// Route for user login
router.post("/login", login);

router.get("/getallusers", getAllUsers);

module.exports = router;