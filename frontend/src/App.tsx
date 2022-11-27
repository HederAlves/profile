import { useQuery } from "@apollo/client";
import type { User } from '../src/types/index';
import { GET_USERS } from '../src/graphql/queries/Users'
import { NewUserForm } from "./components/NewUserForm";
import { DeleteUser } from "./components/DeleteUser";
import { Card, Layout } from "./style";

function App() {
  const { data, loading } = useQuery<{ user: User[] }>(GET_USERS);


  if (loading) {
    return <p>Carregando...</p>;
  } 
    return (
      <>
        <NewUserForm />
        <Layout>
            { data?.user.map( _user => <Card key={ _user.id}>{ _user.name}<DeleteUser /></Card>) }
        </Layout>
      </>
    )
}

export default App;