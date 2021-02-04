import { config } from "../config";
import { connect } from "mongoose";

const {
  mongo: {
    connection: { username, password, cluster, dbProd },
  },
} = config;
const {
  mongo: {
    connection: { host, localPort },
  },
} = config;

const connectionString =
  !username || !password
    ? `mongodb://${host}:${localPort}/${dbProd}`
    : `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbProd}?retryWrites=true&w=majority`;

export const mongoConnection = async () => {
  await connect(connectionString, {
    poolSize: 5,
    useCreateIndex: true,
    wtimeout: 2500,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
