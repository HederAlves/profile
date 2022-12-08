import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { UPDATE_USER } from "../../graphql/mutation/User";
import { GET_USERS } from "../../graphql/queries/Users";
import { ButtonCardUser } from "./style";


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
        name: name,
        password: password,
        email: email,
        phone: phone,
        id: id,
      },
      refetchQueries: [GET_USERS]
    });
  };

  return (
    <form onSubmit={handleupdateUser}>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
      <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
      <input type='text' value={phone} onChange={e => setPhone(e.target.value)} />
      <ButtonCardUser type="submit">Atualizar</ButtonCardUser>
    </form>
  );
}

export default Update;
