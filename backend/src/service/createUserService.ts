import dataSource from "../database/data-source";
import { users } from "../entity/users";

const createUser = dataSource
    .createQueryBuilder()
    .insert()
    .into(users)
    .values([{
        name: 'Heder',
        password: 'password',
        email: 'email@example.com',
        phone: 89798798798
    }])
    .execute()

export default createUser;