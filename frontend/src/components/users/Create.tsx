//import { client } from '../lib/apollo';
import { useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { CREATE_USER } from '../../graphql/mutation/User';
import { GET_USERS } from '../../graphql/queries/Users';
import imgNG from '../../../doc/images/ngi.png'
import { 
    ButtonLoginRegister,
    FormLoginRegister, 
    LiFormLoginRegister, 
    LinkCadastro, 
    SectionForm, 
    SectionImageTitleForm, 
    Title 
} from './style';

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
            /*Código abaixo pelo cache
            update: (cache, { data: { createUser } }) => {
                const { users } = client.readQuery({ query: GET_USERS })
                cache.writeQuery({ query: GET_USERS, data: { users: [ ...users, createUser,]}})} */
        })
    }

    return (
        <SectionForm onSubmit={handleCreateUser}>
            <SectionImageTitleForm>
                <img src={imgNG} alt="" />
                <Title>Bem vindo !</Title>
            </SectionImageTitleForm>
            <FormLoginRegister>
                <p>Crie sua conta</p>
                <LiFormLoginRegister>
                    <label>Digite seu nome</label>
                    <input type='text' placeholder='Nome' value={name} onChange={e => setName(e.target.value)} />
                </LiFormLoginRegister>
                <LiFormLoginRegister>
                    <label>Digite seu senha</label>
                    <input type="password" placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)} />
                </LiFormLoginRegister>
                <LiFormLoginRegister>
                    <label>Digite seu email</label>
                    <input type='text' placeholder='seuemail@email.com' value={email} onChange={e => setEmail(e.target.value)} />
                </LiFormLoginRegister>
                <LiFormLoginRegister>
                    <label>Digite seu telefone</label>
                    <input type='text' placeholder='(99)99999-99' value={phone} onChange={e => setPhone(e.target.value)} />
                </LiFormLoginRegister>
                <ButtonLoginRegister type='submit'>Cadastrar</ButtonLoginRegister>
            </FormLoginRegister>
            <LinkCadastro>
                <p>Faça seu</p>
                <a href="login">login</a>
            </LinkCadastro>
        </SectionForm>
    );
}

export default Create;
