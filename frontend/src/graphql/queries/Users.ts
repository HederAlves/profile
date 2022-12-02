import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query NewUserForm{
      user {
        id
        name  
      }
  } 
`;