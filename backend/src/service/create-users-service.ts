import { dataSource } from "../data-source";
import { users } from "../entity/users";

const createUserService = dataSource
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
export default createUserService;