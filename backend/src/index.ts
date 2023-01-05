import 'reflect-metadata';
import path = require('path');
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import dataSource from './database/data-source';

dataSource.initialize()
async function main(){
    
    const schema = await buildSchema({
        resolvers: [
            `${__dirname}/graphql/resolvers/*`
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    })

    const app = new ApolloServer({
        schema
    })

    app.listen(4000, () => {
        console.log('🏃 Running Server');
      });
}

main();

// import "reflect-metadata";
// import { ApolloServer } from 'apollo-server';
// import { buildSchema } from 'type-graphql';
// import path = require("path");
// import dataSource from "./data-source";

// dataSource.initialize()

// async function main(){
    
//     const schema = await buildSchema({
//         resolvers: [
//             `${__dirname}/graphql/resolvers/*`
//         ],
//         emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
//     })

//     const apolloServer = new ApolloServer({
//         schema
//     })

//     await apolloServer.listen(4000)
//     console.log(`Server running on port 4000`);
// }

// main();