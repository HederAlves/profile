import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { UPDATE_USER } from "../../graphql/mutation/User";
import { GET_USERS } from "../../graphql/queries/Users";
import { Button, Input } from "../../style";

interface IProps { id: string, name: string, password: string, email: string, phone: string }

const Update = (props: IProps) => {
  var { id, name, password, email, phone } = props
  var [name, setName] = useState('');
  var [password, setPassword] = useState('');
  var [email, setEmail] = useState('');
  var [phone, setPhone] = useState('');
  const [updateUser] = useMutation(UPDATE_USER);

  async function handleupdateUser(event: FormEvent) {
    event.preventDefault();

    if (!name) {
      return;
    }

    await updateUser({
      variables: {
        updateUser: name, id, password, email, phone
      },
      refetchQueries: [GET_USERS]
    });
  };

  return (
    <form onSubmit={handleupdateUser}>
      <Input type='text' value={name} onChange={e => setName(e.target.value)} />
      <Input type='text' value={password} onChange={e => setPassword(e.target.value)} />
      <Input type='text' value={email} onChange={e => setEmail(e.target.value)} />
      <Input type='text' value={phone} onChange={e => setPhone(e.target.value)} />
      <Button type="submit">Atualizar</Button>
    </form>
  );
}

export default Update;
