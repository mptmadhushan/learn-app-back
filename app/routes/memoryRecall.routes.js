module.exports = (app) => {
  const items = require("../controllers/memoryRecall.controller");

  var router = require("express").Router();

  router.post("/", items.create);

  router.get("/findById/:id", items.findByID);

  router.get("/findAll", items.findAll);

  router.delete("/:id", items.delete);

  app.use("/api/memoryRecall", router);
};
