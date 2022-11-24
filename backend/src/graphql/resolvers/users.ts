import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { user } from "../../model/User";
import { v4 as uuid } from 'uuid'
import { Context } from "vm";

@Resolver()
export class UserResolver {
    private data: user[] = [];
    service: any;

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
    async removeUser(
        @Ctx() context: Context,
        @Arg('userId') userId: string
    ): Promise<user> {
        return this.service.remove(context, userId)
    }
}