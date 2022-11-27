import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { user } from "../../model/User";
import { v4 as uuid } from 'uuid'
import { Context } from "vm";

@Resolver()
export class UserResolver {
    private data: user[] = [];
    private id: any;

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

    @Mutation(() => user)
    async deleteUser(
        @Ctx() context: Context,
        @Arg('id') id: string
    ): Promise<user> {
        return this.id.deleteUser(context, id)
    }
}