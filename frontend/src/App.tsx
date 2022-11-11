import { gql, useQuery } from "@apollo/client";

type ResultantGET = {
  id: string;
  response: string;
};

const GET_NEWS = gql`
  query {
    resultantGET {
      response
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{ resultantGET: ResultantGET[] }>(GET_NEWS);

  console.log();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <ul>
      {data?.resultantGET.map((news) => (
        <li key={news.id}>{news.response}</li>
      ))}
    </ul>
  );
}

export default App;
