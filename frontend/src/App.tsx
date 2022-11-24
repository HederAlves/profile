import { gql, useMutation, useQuery } from "@apollo/client";
import type { User } from '../src/types/index';
import { GET_USERS } from '../src/graphql/queries/Users'
import { NewUserForm } from "./components/NewUserForm";
import { Button, Card, Layout } from "./style";

const REMOVE_USER = gql`
    mutation removeUser($id: String!) {
        removeUser(id: $id) {
            id
        }
    }
`

function App() {
  const { data, loading } = useQuery<{ user: User[] }>(GET_USERS);
  const remove = useMutation(REMOVE_USER);

  if (loading) {
    return <p>Carregando...</p>;
  } 
    return (
      <>
        <NewUserForm />
        <Layout>
            { data?.user.map(x => <Card key={x.id}>{x.name}<Button onClick={(e) => remove }>Excluir</Button></Card>) }
        </Layout>
      </>
    )
}

export default App;