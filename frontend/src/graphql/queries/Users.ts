import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query user{
    user {
      id
      name
      password
      email
      phone
    }
  } 
`;