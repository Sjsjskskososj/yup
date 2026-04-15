const express = require("express");

const routes = require("./routes");
const { errorMiddleware } = require("./middlewares/error.middleware");

function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/health", (_req, res) => res.json({ ok: true }));
  app.use(routes);

  app.use(errorMiddleware);
  return app;
}

module.exports = { createApp };

