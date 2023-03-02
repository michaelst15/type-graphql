import "reflect-metadata";
import * as Express from 'express'
import {  ApolloServer } from 'apollo-server-express'
import { Resolver, Query, buildSchema } from 'type-graphql'


@Resolver()
class HelloResolver{
    @Query(() => String, { name: "outData"})
    async check() {
        return "out data";
    }
}

const main = async () => {
const schema = await buildSchema({
    resolvers: [HelloResolver]
})



const apolloServer = new ApolloServer({ schema })
const app = Express();

await apolloServer.start()

apolloServer.applyMiddleware({ app })

app.listen(3200, () => {
    console.log('server run')
})
}

main()


