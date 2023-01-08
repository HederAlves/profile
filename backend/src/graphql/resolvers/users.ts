import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { user } from '../../model/User';
import { v4 as uuid } from 'uuid'
import { Context } from 'vm';
import UsersRepository from '../../repositories/usersRepository';
@Resolver()
export class UserResolver {
    private data: UsersRepository[] = [];

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


// import { Length, MaxLength } from "class-validator";
// import { Arg, Field, FieldResolver, InputType, Mutation, Query, Resolver, Root } from "type-graphql";
// import { Repository } from "typeorm";
// import { user } from "../../model/User";


// @InputType()
// export class RecipeInput {
//   @Field()
//   @MaxLength(30)
//   title: string;

//   @Field({ nullable: true })     
//   @Length(30, 255)
//   description?: string;

//   @Field(type => [String])
//   ingredients: string[];



// @Resolver(of => user)
// export class RecipeResolver {
//   rateRepository: any;
//   constructor(
//     private readonly recipeRepository: Repository<user>,
//   ) {}

//   @Query(returns => user)
//   async recipe(@Arg("recipeId") recipeId: string) {
//     return this.recipeRepository.findOneById(recipeId);
//   }

//   @Mutation(returns => user)
//   async addRecipe(@Arg("recipe") recipeInput: RecipeInput) {
//     const newRecipe = this.recipeRepository.create(recipeInput);
//     return this.recipeRepository.save(newRecipe);
//   }

//   @FieldResolver()
//   ratings(@Root() recipe: user) {
//     return this.rateRepository.find({ recipeId: recipe.id });
//   }
// }

// function MaxArraySize(arg0: number) {
//     throw new Error("Function not implemented.");
// }
