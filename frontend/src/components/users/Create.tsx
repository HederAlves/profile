//import { client } from '../lib/apollo';
import { useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { CREATE_USER } from '../../graphql/mutation/User';
import { GET_USERS } from '../../graphql/queries/Users';

interface IProps { id: string, name: string, password: string, email: string, phone: string }

const Create = (props: IProps) => {
    var { id, name, password, email, phone } = props
    var [name, setName] = useState('');
    var [password, setPassword] = useState('');
    var [email, setEmail] = useState('');
    var [phone, setPhone] = useState('');
    const [createUser] = useMutation(CREATE_USER);

    async function handleCreateUser(event: FormEvent) {
        event.preventDefault();

        await createUser({
            variables: {
                id: id,
                name: name,
                password: password,
                email: email,
                phone: phone
            },
            refetchQueries: [GET_USERS]
            //Código acima busca do backend 
            //Código abaixo pelo cache
            /*update: (cache, { data: { createUser } }) => {
                const { users } = client.readQuery({ query: GET_USERS })
                cache.writeQuery({
                   query: GET_USERS,
                   data: {
                       users: [
                           ...users,
                           createUser,
                ]}})} */
        })
    }

    return (
        <form onSubmit={handleCreateUser}>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
            <input type='text' value={phone} onChange={e => setPhone(e.target.value)} />
            <button type='submit'>Cadastrar</button>
        </form>
    );
}

export default Create;
