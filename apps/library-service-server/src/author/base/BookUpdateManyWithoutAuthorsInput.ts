/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BookWhereUniqueInput } from "../../book/base/BookWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BookUpdateManyWithoutAuthorsInput {
  @Field(() => [BookWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BookWhereUniqueInput],
  })
  connect?: Array<BookWhereUniqueInput>;

  @Field(() => [BookWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BookWhereUniqueInput],
  })
  disconnect?: Array<BookWhereUniqueInput>;

  @Field(() => [BookWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BookWhereUniqueInput],
  })
  set?: Array<BookWhereUniqueInput>;
}

export { BookUpdateManyWithoutAuthorsInput as BookUpdateManyWithoutAuthorsInput };
