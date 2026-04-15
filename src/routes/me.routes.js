const { Router } = require("express");

const { authMiddleware } = require("../middlewares/auth.middleware");
const { MeController } = require("../controllers/me.controller");

const router = Router();
const controller = new MeController();

router.get("/", authMiddleware, (req, res, next) => controller.get(req, res, next));

module.exports = router;

