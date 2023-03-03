import { Mutation, Arg, Ctx } from "type-graphql";
// import { AccountEntity } from "src/Entity";
import { getManager } from "typeorm";
import { Resolver } from "type-graphql";
import { AppContext } from "src/Component/AppContext";
import { AccountInput } from "src/BaseInput";

@Resolver()
export class AccountActionInput {
@Mutation(() => String)
async createUserAccount(
    @Arg('input', () => AccountInput)
    input: AccountInput,
    @Ctx() {payload}: AppContext,
 ) {
    const ex = await getManager().transaction(async tr => {
        
    })
 }
}