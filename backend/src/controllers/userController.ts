import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { users } from "../entity/users";

@Resolver(users)
class UserController {

  @Query(returns => [users], { name: 'users' })
  async find() {
    const users = await pgUsers.find().select(['id', 'name', 'email', 'createdAt', 'updatedAt']);

    return users;
  }

  @Query(returns => users, { name: 'user' })
  async findById(
    @Arg("id") id: string
  ) {
    const user = await pgUsers.findById(id);

    if (!user) {
      throw new Error('users does not exists');
    }

    return user;
  }

  @Mutation(returns => users, { name: 'createUser' })
  async create(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("password") password: string,
  ) {

    const user = await pgUsers.create({ name, email, password });
    return user;
  }
}

export default UserController;