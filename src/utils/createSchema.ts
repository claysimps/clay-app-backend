import { ObjectId } from "mongodb";
import path from "path";
import { buildSchema } from "type-graphql";
import { ObjectIdScalar } from "./object-id.scalar";
import {
  AddProjectResolver,
  AddBookResolver,
  AddArticleResolver,
  QueryProjectResolver,
  QueryBookResolver,
  QueryArticleResolver,
} from "../modules";

export const createSchema = async () => {
  const schema = await buildSchema({
    resolvers: [
      AddProjectResolver,
      AddBookResolver,
      AddArticleResolver,
      QueryProjectResolver,
      QueryBookResolver,
      QueryArticleResolver,
    ] as const,
    emitSchemaFile: path.resolve(__dirname, "../generated/graphql/schema.gql"),
    scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
  });
  return schema;
};
