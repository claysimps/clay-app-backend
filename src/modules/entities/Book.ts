import { getModelForClass, prop as Property } from "@typegoose/typegoose";
import { Field, ID } from "type-graphql";
import { ObjectID } from "mongodb";

export class Book {
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
  public author: string;

  @Field()
  @Property({ trim: true })
  public classification?: string;

  @Field()
  @Property({ trim: true })
  public bookUrl?: string;

  @Field()
  @Property({ trim: true })
  public synopsis?: string;
}

export const BookModel = getModelForClass(Book);
