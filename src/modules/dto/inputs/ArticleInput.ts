import { Field, InputType } from "type-graphql";

@InputType({ description: "Article input" })
export class ArticleInput {
  @Field()
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
