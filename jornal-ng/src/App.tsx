import { gql, useMutation } from "@apollo/client"

const GET_USER = gql`
  mutation {
    response {
      status
    }
  }
`;

function App() {

  const result  = useMutation(GET_USER)

  console.log(result)

  return (
   <h1>hello World</h1>
  );
}

export default App;