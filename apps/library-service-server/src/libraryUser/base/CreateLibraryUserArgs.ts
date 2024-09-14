/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LibraryUserCreateInput } from "./LibraryUserCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateLibraryUserArgs {
  @ApiProperty({
    required: true,
    type: () => LibraryUserCreateInput,
  })
  @ValidateNested()
  @Type(() => LibraryUserCreateInput)
  @Field(() => LibraryUserCreateInput, { nullable: false })
  data!: LibraryUserCreateInput;
}

export { CreateLibraryUserArgs as CreateLibraryUserArgs };