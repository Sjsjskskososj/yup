const { Router } = require("express");
const { AuthController } = require("../controllers/auth.controller");

const router = Router();
const controller = new AuthController();

router.post("/login", (req, res, next) => controller.login(req, res, next));

module.exports = router;

