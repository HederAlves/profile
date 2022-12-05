import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/queries/Users";
import { Card, Layout } from "../../style";
import { User } from "../../types";
import Create from "./Create";
import Delete from "./Delete";
import Update from "./Update";

const View = () => {
  const { data, loading } = useQuery<{ user: User[] }>(GET_USERS);

  if (loading) {
      return <p>Carregando...</p>;
  }
  return (
    <>
    <Create id={""} name={""} password={""} email={""} phone={""} />
    <Layout>
        {data?.user.map(_user => 
        <Card key={_user.id}>
          <p>{_user.name}</p>
          <p>{_user.email}</p>
          <p>{_user.phone}</p>
          <Delete id={_user.id} />
          <Update name={_user.name} id={_user.id} />
        </Card>)}
    </Layout>
    </>
  );
}

export default View;
