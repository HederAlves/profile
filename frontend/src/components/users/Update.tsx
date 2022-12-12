import { useMutation } from '@apollo/client';
import { TextField } from '@mui/material';
import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonPrimary, FormRowWrap } from '../../commonStyles';
import { UPDATE_USER } from '../../graphql/mutation/User';
import { GET_USERS } from '../../graphql/queries/Users';
import { SectionForm } from './style';

interface IProps { name: string, password: string, email: string, phone: string }

const Update = (props: IProps) => {
	var { name, password, email, phone } = props;
	var [name, setName] = useState('');
	var [password, setPassword] = useState('');
	var [email, setEmail] = useState('');
	var [phone, setPhone] = useState('');
	const [updateUser] = useMutation(UPDATE_USER);
	var { id } = useParams();
	const navigate = useNavigate()

	async function handleUpdateUser(event: FormEvent) {

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
		navigate('/users');
	}

	return (
		<SectionForm onSubmit={handleUpdateUser}>
			<p>Atualize seus dados</p>
			<FormRowWrap>
				<TextField helperText="Por favor insira seu nome" id="outlined-basic" label="Nome" variant="outlined" type="text" value={name} onChange={e => setName(e.target.value)} />
				<TextField helperText="Por favor insira sua senha" id="outlined-basic" label="Senha" variant="outlined" type="password" value={password} onChange={e => setPassword(e.target.value)} />
				<TextField helperText="Por favor insira seu email" id="outlined-basic" label="Email" variant="outlined" type="email" value={email} onChange={e => setEmail(e.target.value)} />
				<TextField helperText="Por favor insira seu telefone" id="outlined-basic" label="Telefone" variant="outlined" type="phone" value={phone} onChange={e => setPhone(e.target.value)} />
				<ButtonPrimary type='submit'>Atualizar</ButtonPrimary>
			</FormRowWrap>
		</SectionForm>
	);
};

export default Update;
