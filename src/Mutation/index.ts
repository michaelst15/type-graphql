// import { AccountInput } from "../BaseInput";
// import { AppContext } from "../Component/AppContext";
import { Mutation, Arg, Query } from "type-graphql";
// import { AccountEntity } from "src/Entity";
// import { getManager } from "typeorm";
import { Resolver } from "type-graphql";
// import { AppContext } from "../Component/AppContext";
import { AccountEntity } from "../Entity";
// import { AccountInput } from "../BaseInput";

@Resolver()
export class RegisterResolver {
    @Query(() => String)
    async execution() {
        const Regis = 'view Regis'
        return Regis;
    };

    @Mutation(() => AccountEntity)
     async createUserAccount(
      // @Arg('ID') ID: string,
      @Arg('Name') Name: string,
      @Arg('Password') Password: string
      // input: AccountInput,
      // @Ctx() {payload}: AppContext,
 ) {
    const user = await AccountEntity.create (
    {
      Name,
      Password
    },
  ).save();
    return user;
  }
}



