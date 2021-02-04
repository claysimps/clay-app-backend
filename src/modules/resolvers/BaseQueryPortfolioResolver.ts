import { Arg, Query, Resolver, ClassType } from "type-graphql";

import { PortfolioModel, BookModel } from "../entities";
import { PortfolioPayload, BookPayload } from "../dto";

function baseQueryResolver<T extends ClassType>(
  suffix: string, //query name
  returnType: T, // return data
  entity: any, // model
) {
  @Resolver()
  class BaseQueryResolver {
    @Query(() => [returnType], { name: `get${suffix}` })
    public async findAll(@Arg("data") data: string): Promise<T[]> {
      return await entity.find({ queryType: data });
    }
    public catch(err: unknown) {
      throw err;
      console.log("ERROR ☢️", err);
    }
  }
  return BaseQueryResolver;
}

export const QueryProjectResolver = baseQueryResolver(
  "Projects",
  PortfolioPayload,
  PortfolioModel,
);

export const QueryBookResolver = baseQueryResolver(
  "Books",
  BookPayload,
  BookModel,
);
