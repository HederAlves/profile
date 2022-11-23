import { gql } from "@apollo/client";

export const UPDATE_USERS = gql`
mutation updateUser($UserUpdate: UserUpdate!) {
    updateUser(User: $UserUpdate) {
        id
        name
    }
}
`;

export const REMOVE_USERS = gql`
mutation removeUser($id: String!) {
    removeUser(id: $id) {
        id
    }
}
`;