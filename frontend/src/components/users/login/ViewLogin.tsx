import { useNavigate } from 'react-router-dom';
import imgNG from '../../../../doc/images/ngi.png';
import imgLogo from '../../../../doc/images/ngi-logo.gif';
import {
	ButtonLoginRegister,
	FormLoginRegister,
	LayoutLoginRegister,
	LiFormLoginRegister,
	LinkCadastro, SectionForm,
	SectionImageLoginRegister,
	SectionImageTitleForm,
	Title
} from '../style';

const View = () => {
	const navigate = useNavigate();

	return (
		<LayoutLoginRegister>
			<SectionImageLoginRegister>
				<img src={imgNG} />
			</SectionImageLoginRegister>
			<SectionForm>
				<SectionImageTitleForm>
					<img src={imgLogo} />
					<Title>Bem vindo !</Title>
				</SectionImageTitleForm>
				<FormLoginRegister>
					<p>Faça seu login</p>
					<LiFormLoginRegister>
						<label>Digite sua nome</label>
						<input type="text" placeholder='nome' />
					</LiFormLoginRegister>
					<LiFormLoginRegister>
						<label>Digite sua senha</label>
						<input type="password" placeholder='senha' />
					</LiFormLoginRegister>
					<ButtonLoginRegister onClick={() => {
						navigate('./users');
					}}>Entrar</ButtonLoginRegister>
				</FormLoginRegister>
				<LinkCadastro>
					<p>Faça já seu</p>
					<a href='register'>Cadastro</a>
				</LinkCadastro>
			</SectionForm>
		</LayoutLoginRegister>
	);
};

export default View;
