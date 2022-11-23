import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { user } from "../../model/User";
import { v4 as uuid } from 'uuid'

@Resolver()
export class UserResolver {
    private data: user[] = [];

    @Query(() => [user])
    async user() {
        return this.data;
    }

    @Mutation(() => user)
    async createUser(
        @Arg('name') name: string
    ) {
        const user = { id: uuid(), name }
        this.data.push(user)
        return user;
    }
}