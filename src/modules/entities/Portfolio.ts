import { getModelForClass, prop as Property } from "@typegoose/typegoose";
import { ObjectID } from "mongodb";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType({ description: "Model for portfolio" })
export class Portfolio {
  @Field(() => ID)
  readonly id: ObjectID;

  @Field()
  @Property({ trim: true, required: true })
  public queryType: string;

  @Field()
  @Property({ trim: true, required: true })
  public projectName: string;

  @Field()
  @Property({ trim: true, required: true })
  public headerTitle: string;

  @Field()
  @Property({ trim: true, required: true })
  public headerBody: string;

  @Field()
  @Property({ trim: true, required: true })
  public headerFooter: string;

  @Field()
  @Property({ trim: true, required: true })
  public cardBodyText: string;

  @Field()
  @Property({ trim: true, required: true })
  public buttonOneLink: string;

  @Field()
  @Property({ trim: true })
  public buttonTwoLink?: string;

  @Field()
  @Property({ trim: true, required: true })
  public buttonOptionOne: string;

  @Field()
  @Property({ trim: true })
  public buttonOptionTwo?: string;
}

export const PortfolioModel = getModelForClass(Portfolio);
