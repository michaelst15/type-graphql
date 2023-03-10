// import { DataAccount } from "../Entity/addEntity";
import { Resolver, FieldResolver, Root } from "type-graphql";
import { AccountEntity } from "../Entity";
// import { AppContext } from "../Component/AppContext";
// import { getConnection } from "typeorm";

@Resolver()
export class AccountFieldResolver {
    @FieldResolver()
    async fullData(
        @Root() parent: AccountEntity
        ) { 
            return `${parent.ID}`;
        }
 }



