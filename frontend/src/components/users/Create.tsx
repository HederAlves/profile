//import { client } from '../lib/apollo';
import { useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { CREATE_USER } from '../../graphql/mutation/User';
import { SectionForm, SectionTitle } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { ButtonPrimary, FormRowWrap, LinkPrimary, Title } from '../../commonStyles';
import imgNG from '../../../doc/images/ngi-logo.gif';
import { GET_USERS } from '../../graphql/queries/Users';

interface IProps { id: string, name: string, password: string, email: string, phone: string }

const Create = (props: IProps) => {
	var { id, name, password, email, phone } = props;
	var [name, setName] = useState('');
	var [password, setPassword] = useState('');
	var [email, setEmail] = useState('');
	var [phone, setPhone] = useState('');
	const [createUser] = useMutation(CREATE_USER);
	const navigate = useNavigate()

	async function handleCreateUser(event: FormEvent) {
		event.preventDefault();

		await createUser({
			variables: {
				createUser: id, name, password, email, phone
			},
			refetchQueries: [GET_USERS]
		});
		navigate('/');
	};

	return (
		<SectionForm onSubmit={handleCreateUser}>
			<SectionTitle>
				<img src={imgNG} alt="" />
				<Title>Bem vindo !</Title>
			</SectionTitle>
			<p>Crie sua conta</p>
			<FormRowWrap>
				<TextField helperText="Por favor insira seu nome" id="outlined-basic" label="Nome" variant="outlined" type="text" value={name} onChange={e => setName(e.target.value)} />
				<TextField helperText="Por favor insira sua senha" id="outlined-basic" label="Senha" variant="outlined" type="password" value={password} onChange={e => setPassword(e.target.value)} />
				<TextField helperText="Por favor insira seu email" id="outlined-basic" label="Email" variant="outlined" type="email" value={email} onChange={e => setEmail(e.target.value)} />
				<TextField helperText="Por favor insira seu telefone" id="outlined-basic" label="Telefone" variant="outlined" type="phone" value={phone} onChange={e => setPhone(e.target.value)} />
				<ButtonPrimary type='submit' >Cadastrar</ButtonPrimary>
			</FormRowWrap>
			<LinkPrimary>
				<p>Faça seu</p>
				<Link to={'/'} >Login</Link>
			</LinkPrimary>
		</SectionForm>
	);
};

export default Create;
