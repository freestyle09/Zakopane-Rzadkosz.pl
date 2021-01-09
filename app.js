const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.get("/cos", (req, res) => {
    res.send({ id: 1, name: "Józef" });
  });

  app.get("*", (req, res) => {
    handle(req, res);
  });

  return app.listen(5000, () => console.log("Listening on 5000 port"));
});
