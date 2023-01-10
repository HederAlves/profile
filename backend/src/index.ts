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