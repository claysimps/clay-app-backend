const appName = "Clay App Server";

export const config = {
  appName,
  server: {
    port: process.env.APP_PORT,
  },
  mongo: {
    connection: {
      host: process.env.MONGO_HOST,
      username: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      cluster: process.env.MONGO_CLUSTER,
      localPort: process.env.MONGO_PORT,
      dbProd: process.env.MONGO_DATABASE,
    },
    collections: {
      CompanyUser: "companyUser",
      WorkerUser: "workerUser",
    },
    queryLimit: process.env.MONGODB_QUERY_LIMIT,
    questionLimit: process.env.QUESTION_LIMIT,
  },

  mongoErrorCode: {
    duplicateId: 11000,
  },
  logging: {
    level: process.env.LOG_LEVEL || "info",
    console: process.env.LOG_ENABLE_CONSOLE === "true",
  },
};
