import { registerEnumType } from 'type-graphql'

export enum routes {
    login = 'login',
    register ='register',
    users = 'users',
    profile = 'profile:id'
}

registerEnumType(routes, { name: 'routes' })

export default routes