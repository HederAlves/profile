import { gql, useMutation, useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries/Users";
import { Button } from "../style";

const DELETE_USER = gql`
  mutation deleteUser($deleteUser: String!) {
    deleteUser(id: $deleteUser)
  }
`;

export function DeleteUser() {
  const [deleteUser] = useMutation(DELETE_USER);
  const { data, loading } = useQuery(GET_USERS);

  if (loading) return <p>loading...</p>;

  const onDeleteUser = () => {
    console.log(data);

    deleteUser({
      variables: {
        deleteUser: data.user[0].id,
      },
    });
    console.log(data.user[0].id);
  };

  return (
    <div>
      <Button onClick={onDeleteUser}>Excluir</Button>
    </div>
  );
}