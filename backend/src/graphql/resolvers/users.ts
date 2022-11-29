import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { user } from "../../model/User";
import { v4 as uuid } from 'uuid'
import { Context } from "vm";

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

    /* @Mutation(() => user)
    async deleteUser(
        @Ctx() context: Context,
        @Arg('id') id: string
    ): Promise<user> {
        return this.deleteUser(context, id)
    } */

    @Mutation(_ => Boolean)
    async deleteUser(
        @Ctx() context: Context,
        @Arg("id") id: string
        ): Promise<boolean> {
            const index = this.data.findIndex(user => user.id === id);
            if (index > -1) {
                this.data.splice(index, 1);
                return true;
            }
     {
        user.deleteUser(context, id);
        return true;
    }}
    
    @Mutation(_ => Boolean)
    async updateUser(
        @Ctx() context: Context,
        @Arg("id") id: string,
        @Arg("name") name: string
        ) {
        user.updateUser(context, id, name);
        return true;
    }
}