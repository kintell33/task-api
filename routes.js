var express = require("express");
var router = express.Router();
const service = require("./services/TaskService");

router.get("/tasks", async function (req, res) {
  const quantity = req.query.quantity || 3;
  res.status(200).json(await service.getTasks(quantity));
});

router.put("/tasks/:uuid", function (req, res) {
  service.finishTask(req.params.uuid);
  res.status(200).json({ uuid: req.params.uuid });
});

module.exports = router;
