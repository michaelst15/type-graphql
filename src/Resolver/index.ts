import { Resolver, Query } from "type-graphql";

@Resolver()
export class RegisterResolver{
    @Query(() => String, { name: 'Regis' })
    async execution() {
        const Regis = 'view Regis'
        return Regis;
    }
}