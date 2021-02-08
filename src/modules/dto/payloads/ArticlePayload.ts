import { ObjectID } from "mongodb";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType({ description: "Article Payload" })
export class ArticlePayload {
  @Field(() => ID)
  readonly id: ObjectID;
  @Field({ nullable: true })
  public queryType: string;
  @Field()
  public title: string;
  @Field()
  public publisher: string;
  @Field()
  public articleUrl: string;
  @Field()
  public excerpt: string;
}
