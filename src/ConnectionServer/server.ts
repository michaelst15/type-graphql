import "reflect-metadata";
import * as Express from 'express'
import {  ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
// import { schema } from "src/schema/schema";
import { buildSchema } from "type-graphql";
import { RegisterResolver } from "../Mutation/index";

const main = async () => {

const apolloServer = new ApolloServer({ 
    schema: await buildSchema({
        resolvers: [RegisterResolver] 
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground]  
})

const app = Express();

await apolloServer.start()

apolloServer.applyMiddleware({ app })

app.listen(3200, () => {
    console.log('server run')
})
}

main()


