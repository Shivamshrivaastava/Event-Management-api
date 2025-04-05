const express = require("express");
const { register, login, getAllUsers } = require("../controllers/auth.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const { isAdmin } = require("../middleware/role.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", authMiddleware, isAdmin, getAllUsers); // admin only

module.exports = router;
