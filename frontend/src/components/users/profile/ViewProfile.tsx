import { LayoutRowProfile } from '../../../commonStyles';
import { ImgUser } from '../style';
import userImg from '../../../../doc/images/user.png';
import Update from '../Update';
import NavBar from '../../atoms/Template';

const ViewProfile = () => {

	return (
		<>
			<NavBar />
			<LayoutRowProfile>
				<Update name={''} password={''} email={''} phone={''} />
				<ImgUser src={userImg} alt='imagem do usuário' />
			</LayoutRowProfile>
		</>
	);
};

export default ViewProfile; 
