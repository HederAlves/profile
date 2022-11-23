import { useQuery } from "@apollo/client";
import type { User } from '../src/types/index';
import { GET_USERS } from '../src/graphql/queries/Users'
import { NewUserForm } from "./components/NewUserForm";
import { REMOVE_USERS } from "./graphql/mutation/DeleteUpdateUsers";


function App() {
  const { data, loading } = useQuery<{ user: User[] }>(GET_USERS);

  if (loading) {
    return <p>Carregando...</p>;
  } 
    return (
      <div>
        <ul>
          { data?.user.map(x => <li key={x.id}>{x.name}<button onClick={(e) => REMOVE_USERS}>Excluir</button></li>) }
        </ul>
        <NewUserForm />
      </div>
    )
}

export default App;