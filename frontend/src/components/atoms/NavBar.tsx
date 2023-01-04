import { Link } from 'react-router-dom';
import imgNG from '../../../doc/images/ngi.png'
import { ButtonNavBar, ImgNavBar, LayoutNavBar, ListButtons } from "./style";
import { memo } from 'react'

const NavBar = () => {

	return (
		<LayoutNavBar>
			<ImgNavBar src={imgNG} />
			<ListButtons>
				<li><Link to={'/usuarios'} ><ButtonNavBar>Inicio</ButtonNavBar></Link></li>
				<li><Link to={'/'} ><ButtonNavBar>Sair</ButtonNavBar></Link></li>
			</ListButtons>
		</LayoutNavBar>
	);
};

export default memo(NavBar);
