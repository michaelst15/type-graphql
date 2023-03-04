import { AccountInput } from "../BaseInput";
import { AppContext } from "../Component/AppContext";
import { Mutation, Arg, Query, Ctx } from "type-graphql";
// import { AccountEntity } from "src/Entity";
// import { getManager } from "typeorm";
import { Resolver } from "type-graphql";
// import { AppContext } from "../Component/AppContext";
import { AccountEntity } from "../Entity";
// import { AccountInput } from "../BaseInput";

@Resolver(AccountEntity)
export class RegisterResolver {
    @Query(() => String)
    async execution() {
        const Regis = 'view Regis'
        return Regis;
    };

    @Mutation(() => AccountEntity)
     async createUserAccount(
      @Arg('input', () => AccountInput)
      input: AccountInput,
      @Ctx() {payload}: AppContext,
 ) {
    const user = await AccountEntity.create({
      ...input,
      Name: payload?.Name,
      password: payload?.password
    }).save();

    return user;
  }
}

// @Resolver()
// export class AccountActionInput {


