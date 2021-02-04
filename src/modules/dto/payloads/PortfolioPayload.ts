import { ObjectType, Field, ID } from "type-graphql";
import { ObjectID } from "mongodb";

@ObjectType({ description: `This is the portfolio payload` })
export class PortfolioPayload {
  @Field(() => ID)
  readonly id: ObjectID;
  @Field({ nullable: true })
  public queryType?: string;
  @Field({ nullable: true })
  public projectName: string;
  @Field()
  public headerTitle: string;
  @Field()
  public headerBody: string;
  @Field()
  public headerFooter: string;
  @Field()
  public cardBodyText: string;
  @Field()
  public buttonOneLink: string;
  @Field({ nullable: true })
  public buttonTwoLink?: string;
  @Field()
  public buttonOptionOne: string;
  @Field({ nullable: true })
  public buttonOptionTwo?: string;
}
