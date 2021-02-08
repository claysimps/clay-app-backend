import { ObjectID } from "mongodb";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: `This is the Book payload` })
export class BookPayload {
  @Field(() => ID)
  readonly id: ObjectID;
  @Field({ nullable: true })
  public queryType?: string;
  @Field()
  public title: string;
  @Field()
  public author: string;
  @Field()
  public classification: string;
  @Field()
  public bookUrl: string;
  @Field()
  public synopsis: string;
}
