import { LayoutRow } from '../../../commonStyles';
import { ImgUser } from '../style';
import userImg from '../../../../doc/images/user.png';
import Update from '../Update';

const ViewProfile = () => {

	return (
		<LayoutRow>
			<Update name={''} password={''} email={''} phone={''}    />
			<ImgUser src={userImg} alt='imagem do usuário' />
		</LayoutRow>
	);
};

export default ViewProfile; 
