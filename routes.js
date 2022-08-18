var express = require("express");
var router = express.Router();
const getTask = require('./services/TaskService');

router.get("/tasks", async function (req, res) {
  const quantity = req.query.quantity || 3;
  res.status(200).json(await getTask(quantity));
});

router.put("/tasks:uuid", function (req, res) {
  console.log(req.params.uuid);
  res.status(200).json(req.body);
});

module.exports = router;
