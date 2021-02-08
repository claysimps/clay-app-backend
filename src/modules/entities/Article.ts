import { getModelForClass, prop as Property } from "@typegoose/typegoose";
import { Field, ID } from "type-graphql";
import { ObjectID } from "mongodb";

export class Article {
  @Field(() => ID)
  readonly id: ObjectID;

  @Field()
  @Property({ trim: true, required: true })
  public queryType: string;

  @Field()
  @Property({ trim: true, required: true })
  public title: string;

  @Field()
  @Property({ trim: true, required: true })
  public publisher: string;

  @Field()
  @Property({ trim: true, required: true })
  public articleUrl: string;

  @Field()
  @Property({ trim: true, required: true })
  public excerpt: string;
}

export const ArticleModel = getModelForClass(Article);
