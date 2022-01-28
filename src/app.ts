import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

//configfile should always be on path config/deafult.ts
const port = config.get<number>("port");
const app = express();
app.use(express.json());

app.listen(port, async () => {
  logger.info(`app is listening on port ${port}`);

  await connect();
  routes(app);
});
