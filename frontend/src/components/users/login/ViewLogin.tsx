import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { ButtonPrimary, FormCol, LayoutRow, LinkPrimary, Title } from '../../../commonStyles';
import { SectionForm, SectionImage, SectionTitle } from '../style';
import imgNG from '../../../../doc/images/ngi.png';
import imgLogo from '../../../../doc/images/ngi-logo.gif';

const View = () => {

	return (
		<LayoutRow>
			<SectionImage>
				<img src={imgNG} />
			</SectionImage>
			<SectionForm>
				<SectionTitle>
					<img src={imgLogo} />
					<Title>Bem vindo !</Title>
				</SectionTitle>
				<p>Faça seu login</p>
				<FormCol>
					<TextField id="outlined-basic" label="Nome" variant="outlined" />
					<TextField id="outlined-basic" label="Senha" variant="outlined" type="password" />
					<Link to={'/usuarios'}>
						<ButtonPrimary>
							Entrar
						</ButtonPrimary>
					</Link>
					<LinkPrimary>
						<p>Faça já seu</p>
						<Link to={'/cadastro'} >Cadastro</Link>
					</LinkPrimary>
				</FormCol>
			</SectionForm>
		</LayoutRow>
	);
};

export default View;
