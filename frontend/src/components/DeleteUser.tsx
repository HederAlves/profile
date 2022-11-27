import { gql, useMutation, useQuery } from "@apollo/client";
import { FormEvent } from "react";
import { GET_USERS } from "../graphql/queries/Users";


const DELETE_USER = gql`
  mutation ($id: String) {
    deleteUser(id: $id) {
      id
      name
    }
  }
`;

export function DeleteUser() {
  const id = String;

  const { loading, error} = useQuery(GET_USERS, {
    variables: { id },
  });

  const [DeleteUser, { error: mutationError }] = useMutation(DELETE_USER);

  if (loading) return <p>Loading...</p>;
  if (error || mutationError) return <p>Error :(</p>;

  async function handleCreateUser(event: FormEvent) {
      event.preventDefault();
  
      await DeleteUser({
        variables: { id },
      })
      
  }
  return (
    <form onSubmit={handleCreateUser}>
        <button type="submit">Excluir</button>
    </form>
);
}
