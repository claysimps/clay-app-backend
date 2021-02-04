import { Field, InputType } from "type-graphql";

@InputType({ description: "Portfolio input" })
export class PortfolioInput {
  @Field()
  public queryType: string;
  @Field()
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
