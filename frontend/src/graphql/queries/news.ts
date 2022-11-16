import { gql } from "@apollo/client";

export const GET_NEWS = gql`
 query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
`;