import { useQuery } from "@apollo/client";
import type { Response } from '../src/types/index'; //@app/types
import { GET_NEWS, } from './graphql/queries/news'

function App() {
  const { data, loading } = useQuery<{ response: Response[] }>(GET_NEWS);

  console.log(data);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <ul>
      {data?.response.map((news) => (
        <li>{news.status}</li>
      ))}
    </ul>
  );
}

export default App;