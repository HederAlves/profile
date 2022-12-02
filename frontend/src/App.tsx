import { useQuery } from "@apollo/client";
import type { User } from '../src/types/index';
import { GET_USERS } from '../src/graphql/queries/Users'
import { Card, Layout } from "./style";
import Create from "./components/users/Create";
import Delete from "./components/users/Delete";
import Update from "./components/users/Update";

function App() {
  const { data, loading } = useQuery<{ user: User[] }>(GET_USERS);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Create />
      <Layout>
        {data?.user.map(_user =>
          <Card key={_user.id}>{_user.name}
            <Delete id={_user.id} />
            <Update name={_user.name} id={_user.id} />
          </Card>)}
      </Layout>
    </>
  )
}

export default App;
