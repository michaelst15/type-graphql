// import { BaseInput } from 'typeorm';
import { ArgsType, Field, InputType } from 'type-graphql';

@ArgsType()
export class AccountFilterArgs {
   @Field({ nullable: true }) ID: string;
}

@InputType()
export class AccountInput  {
    @Field({ nullable: true }) ID: string
    @Field() Name: string
    @Field() password: string
}
