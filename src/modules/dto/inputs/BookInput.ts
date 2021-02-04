import { Field, InputType } from "type-graphql";

@InputType({ description: "Portfolio input" })
export class BookInput {
  @Field()
  public queryType: string;
  @Field()
  public title: string;
  @Field()
  public author: string;
  @Field({ nullable: true })
  public classification?: string;
  @Field({ nullable: true })
  public bookUrl?: string;
  @Field({ nullable: true })
  public synopsis?: string;
}
