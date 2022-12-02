import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { UPDATE_USER } from "../../graphql/mutation/User";
import { GET_USERS } from "../../graphql/queries/Users";
import { Button, Input } from "../../style";

interface IProps { id: string, name: string }

const Update = (props: IProps) => {
  var { id, name } = props
  var [name, setName] = useState('');
  const [updateUser] = useMutation(UPDATE_USER);

  async function handleupdateUser(event: FormEvent) {
    event.preventDefault();

    if (!name) {
      return;
    }

    await updateUser({
      variables: {
        updateUser: name, id
      },
      refetchQueries: [GET_USERS]
    });
  };
  
  return (
    <form onSubmit={handleupdateUser}>
      <Input type="text" onChange={e => setName(e.target.value)} />
      <Button type="submit">Atualizar</Button>
    </form>
  );
}

export default Update;
