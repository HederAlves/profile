import userImg from '../../../../doc/images/user.png';
import { ImgUser, LayoutLoginRegister } from '../style';
import Update from '../Update';

const ViewProfile = () => {

	return (
		<LayoutLoginRegister>
			<Update name={''} password={''} email={''} phone={''}    />
			<ImgUser src={userImg} alt='imagem do usuário' />
		</LayoutLoginRegister>
	);
};

export default ViewProfile; 
