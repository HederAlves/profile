import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class user {

    @Field(__type => ID) id: string;
    @Field() name: string;
    @Field() password: string;
    @Field() email: string;
    @Field() phone: string;
    @Field() deleteUser: string;
    @Field() updateUser: string;
}