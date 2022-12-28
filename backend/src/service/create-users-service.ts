import { dataSource } from "../data-source"
import { users } from "../entity/users"


const myDataSource = dataSource
const user = await myDataSource.manager.findOneBy(users, {
    id: 1,
})
user.name = "Umed"
user.password = "Umed"
user.email = "Umed"
user.phone = 475

myDataSource.manager.save(user)