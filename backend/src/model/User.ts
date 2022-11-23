//import { length } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class user {
    @Field(__type => ID)
    id: string;
    
    //Validação
    //@length(10, 50)
    @Field()
    name: string;
}