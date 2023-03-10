import "reflect-metadata";
import * as Express from 'express'
import {  ApolloServer } from 'apollo-server-express'
// import { ApolloClie }
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
// import { schema } from "src/schema/schema";
import { buildSchema } from "type-graphql";
// import { DataSource } from "typeorm";
import { createConnection } from "typeorm";
// import { getConnectionManager } from "typeorm";
import { RegisterResolver } from "../Mutation/index";
// import { AccountEntity } from "../Entity";

const main = async () => {  

await createConnection()

// const conection = await createConnection({
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     entities: [AccountEntity],
//     username: 'postgres',
//     password: 'root',
//     database: 'micsu'
// })

// await conection.connect();  

// const connectionManager = getConnectionManager();
// const connection = await connectionManager.create({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,   
//     username: "root",
//     password: "root",  
//     database: "micsu",  
// })
// await connection.connect()

const apolloServer = new ApolloServer({ 
    schema: await buildSchema({
        resolvers: [RegisterResolver],
        validate: false 
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    // context: ({res, req}) => ({res, req}) 
})

const app = Express();

await apolloServer.start()
  
apolloServer.applyMiddleware({ app })

app.listen(3200, () => {
    console.log('apa lu liat liat')
})
}

main()


