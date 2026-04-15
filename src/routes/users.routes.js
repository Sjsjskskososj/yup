const { Router } = require("express");
const { UsersController } = require("../controllers/users.controller");

const router = Router();
const controller = new UsersController();

router.post("/", (req, res, next) => controller.create(req, res, next));

module.exports = router;

