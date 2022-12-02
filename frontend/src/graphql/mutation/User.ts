import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUser: String!) {
    createUser(name: $createUser) {
      id
      name
    }
  }
`;
 
export const DELETE_USER = gql`
  mutation deleteUser($deleteUser: String!) {
    deleteUser(id: $deleteUser)
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($updateUser: String!, $id: String!) {
    updateUser(name: $updateUser, id: $id)
  }
`;