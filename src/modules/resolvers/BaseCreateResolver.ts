import { Arg, Mutation, Resolver, ClassType } from "type-graphql";

import { PortfolioModel, BookModel, ArticleModel } from "../entities";
import { SuccessPayload, PortfolioInput, ArticleInput } from "../dto";
import { BookInput } from "../dto/inputs/BookInput";

function baseCreateResolver<T extends ClassType, X extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: X,
  entity: any,
) {
  @Resolver()
  class BaseCreateResolver {
    @Mutation(() => returnType, { name: `add${suffix}` })
    public async create(@Arg("data", () => inputType) data: any) {
      await entity.create({ ...data });
      const successMessage = `${suffix} added`;
      return { successMessage };
    }
    public catch(err: unknown) {
      throw err;
      console.log("ERROR ☢️", err);
    }
  }
  return BaseCreateResolver;
}

export const AddProjectResolver = baseCreateResolver(
  "Project",
  SuccessPayload,
  PortfolioInput,
  PortfolioModel,
);

export const AddBookResolver = baseCreateResolver(
  "Book",
  SuccessPayload,
  BookInput,
  BookModel,
);
export const AddArticleResolver = baseCreateResolver(
  "Article",
  SuccessPayload,
  ArticleInput,
  ArticleModel,
);
