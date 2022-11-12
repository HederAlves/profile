import { gql } from "@apollo/client";

export const POST_NEWS = gql`
  mutation GetALL {
    resultantPOST {
      response
    }
  }
`;