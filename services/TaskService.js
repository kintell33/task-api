const { default: axios } = require("axios");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const logger = require("./LogService");

const getTasks = async (quantity) => {
  return await getRandomTasks(quantity);
};

const getRandomTasks = async (quantity) => {
  const response = await axios
    .get(`${process.env.API_LOREM_FAKER_URL}/api?quantity=${quantity}`)
    .then((response) => response.data);
  console.log(response);
  return response.map((e) => {
    return { title: e, uuid: uuidv4() };
  });
};

const finishTask = (uuid) => {
  logger.info(`Marked as done! ${uuid}`);
};

module.exports = { getTasks, finishTask };
