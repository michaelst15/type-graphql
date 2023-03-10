// import { BaseInput } from 'typeorm';
import { ArgsType, Field, InputType } from 'type-graphql';

@ArgsType()
export class AccountFilterArgs {
   @Field() ID: string;
}

@InputType()
export class AccountInput  {
    @Field() ID: string
    @Field({ nullable: true }) Name: string
    @Field({ nullable: true }) Password: string
}
