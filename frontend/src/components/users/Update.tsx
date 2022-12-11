import { useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { UPDATE_USER } from '../../graphql/mutation/User';
import { ButtonLoginRegister, FormLoginRegister, LiFormLoginRegister, SectionForm } from './style';

interface IProps { id: string, name: string, password: string, email: string, phone: string }

const Update = (props: IProps) => {
	var { id, name, password, email, phone } = props;
	var [name, setName] = useState('');
	var [password, setPassword] = useState('');
	var [email, setEmail] = useState('');
	var [phone, setPhone] = useState('');
	const [updateUser] = useMutation(UPDATE_USER);

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
		});
	}
 
	return (
		<SectionForm onSubmit={handleUpdateUser}>
			<FormLoginRegister>
				<p>Atualize seus dados</p>
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
				<ButtonLoginRegister type='submit'>Atualizar</ButtonLoginRegister>
			</FormLoginRegister>
		</SectionForm>
	);
};

export default Update;
