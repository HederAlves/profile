//import { length } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class user {

    @Field(__type => ID)
    id: string;
    
    @Field()
    name: string;

    //Validação
    //@length(10, 50)
    @Field()
    password: string;

    @Field()
    email: string;

    @Field()
    phone: string;

    static deleteUser: any;
    static updateUser: any;
}