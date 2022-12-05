import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { user } from '../../model/User';
import { v4 as uuid } from 'uuid'
import { Context } from 'vm';

@Resolver()
export class UserResolver {
    private data: user[] = [];

    @Query(() => [user])
    async user() {
        return this.data;
    }

    @Mutation(() => user)
    async createUser(
        @Arg('name') name: string,
        @Arg('password') password: string,
        @Arg('email') email: string,
        @Arg('phone') phone: string,
    ) {
        const user = { id: uuid(), name, password, email, phone };
        this.data.push(user)
        return user;
    }

    @Mutation(_ => Boolean)
    async deleteUser(
        @Ctx() context: Context,
        @Arg('id') id: string
    ): Promise<boolean> {
        const index = this.data.findIndex(user => user.id === id);
        if (index > -1) {
            this.data.splice(index, 1);
            return true;
        } {
            user.deleteUser(context, id);
            return true;
        }
    }

    @Mutation(_ => Boolean)
    async updateUser(
        @Ctx() _context: Context,
        @Arg('id') id: string,
        @Arg('name') name: string,
        @Arg('password') password: string,
        @Arg('email') email: string,
        @Arg('phone') phone: string,
    ): Promise<boolean> {
        const index = this.data.findIndex(user => user.id === id);
        if (index > -1) {
            this.data[index].name = name;
            this.data[index].password = password;
            this.data[index].email = email;
            this.data[index].phone = phone;
            return true;
        } {
            const user = { id, name, password, email, phone };
            this.data.push(user);
            return true;
        }
    }
}