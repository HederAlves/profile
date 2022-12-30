import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import path = require("path");
import { dataSource } from "./data-source";
import createUserService from "./service/create-users-service";

dataSource.initialize()

async function main(){
    
    const schema = await buildSchema({
        resolvers: [
            `${__dirname}/graphql/resolvers/*`
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    })

    const apolloServer = new ApolloServer({
        schema
    })

    await apolloServer.listen(4000)
    console.log(`Server running on port 4000`);
}

main();