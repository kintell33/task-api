const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 8001;
const app = express();

//config cors and body parser
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//health check
app.get("/", async (req, res) => {
  res.send("ok");
});

app.use(require('./routes'));

var server = app.listen(PORT, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("App starting at:", host, port);
})