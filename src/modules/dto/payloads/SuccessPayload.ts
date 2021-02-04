import { ObjectType, Field } from "type-graphql";

@ObjectType({ description: `confirms upload` })
export class SuccessPayload {
  @Field(() => String)
  public successMessage: string;
}
