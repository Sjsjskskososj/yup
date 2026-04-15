const { Router } = require("express");

const usersRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");
const meRoutes = require("./me.routes");

const router = Router();

router.use("/users", usersRoutes);
router.use("/auth", authRoutes);
router.use("/me", meRoutes);

module.exports = router;

