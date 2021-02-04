import { ApolloServer } from "apollo-server-express";
import "class-validator";
import "dotenv/config";
import Express from "express";
import "reflect-metadata";
import cors from "cors";
import { config } from "./config";
import {
  mongoConnection,
  createSchema,
  clientSDLEmitter,
  logger,
} from "./utils";

const port = process.env.APP_PORT || 8000;
(async () => {
  await mongoConnection();
  console.log("Mongoose started on port", port);

  const apolloServer = new ApolloServer({
    schema: await createSchema(),
    context: ({ req, res }: any) => ({
      req,
      res,
    }),
  });

  const app = Express();

  app.use(Express.json());

  app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization",
    );
    if (_req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    }),
  );
  apolloServer.applyMiddleware({ app });
  clientSDLEmitter();
  app.listen(port, () => {
    logger.info(`${config.appName} is listening on port: ${port}`);
  });
})();
