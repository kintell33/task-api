const { default: axios } = require("axios");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const logger = require("./LogService");
const redis = require("redis");

let redisClient;

(async () => {
  redisClient = redis.createClient({
    socket: { host: process.env.REDIS_URL, port: process.env.REDIS_PORT },
  });
  redisClient.on("error", (error) => console.error(`Error : ${error}`));
  await redisClient.connect();
})();

const getTasks = async (quantity) => {
  try {
    const cacheData = await redisClient.get(quantity.toString());

    if (cacheData) {
      const taskCache = JSON.parse(cacheData);
      return taskCache;
    } else {
      const tasks = await getNewTasks(quantity);
      await redisClient.set(quantity.toString(), JSON.stringify(tasks));
      return tasks;
    }
  } catch (err) {
    logger.error(`Error when get tasks ${err}:${err.stack}`);
    return [];
  }
};

const getNewTasks = async (quantity) => {
  const response = await axios
    .get(`${process.env.API_LOREM_FAKER_URL}/api?quantity=${quantity}`)
    .then((response) => response.data);
  return response.map((e) => {
    return { title: e, uuid: uuidv4() };
  });
};

const finishTask = (uuid) => {
  logger.info(`Marked as done! ${uuid}`);
};

module.exports = { getTasks, finishTask };
