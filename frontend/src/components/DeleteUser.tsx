import { gql, useMutation, useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries/Users";
import { Button } from "../style";


const DELETE_USER = gql`
  mutation ($id: String) {
    deleteUser(id: $id) {
      id
      name
    }
  }`

  export function DeleteUser() {
    const [deleteUser] = useMutation(DELETE_USER);
    const { data, loading } = useQuery(GET_USERS);

    if (loading) return <p>loading...</p>;

    const onDeleteUser = () => {
      deleteUser({
        variables: { id: 
          data?.deleteUser.id
        },
      })
    };

    return (
      <div>
        <Button onClick={onDeleteUser}>Excluir</Button>
      </div>)
    // const [deleteUser] = useMutation(DELETE_USER);
    // const { data } = useQuery(GET_USERS);
    // return (
    //   <Button
    //     onClick={async () => {
    //       await deleteUser({
    //         variables: {
    //           id: data.deleteUser.id
    //         }
    //       });
    //     }}
    //   ></Button>
    // );
  }

// export function DeleteUser() {
//   const id = String;

//   const { loading, error} = useQuery(GET_USERS, {
//     variables: { id },
//   });

//   const [DeleteUser, { error: mutationError }] = useMutation(DELETE_USER);

//   if (loading) return <p>Loading...</p>;
//   if (error || mutationError) return <p>Error :(</p>;

//   async function handleCreateUser(event: FormEvent) {
//       event.preventDefault();
  
//       await DeleteUser({
//         variables: { id },
//       })
      
//   }
//   return (
//     <form onSubmit={handleCreateUser}>
//         <Button type="submit">Excluir</Button>
//     </form>
// );
// }
