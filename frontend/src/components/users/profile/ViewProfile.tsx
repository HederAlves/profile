import userImg from '../../../../doc/images/user.png';
import { ImgUser, LayoutLoginRegister } from '../style';
import Update from '../Update';
import { useParams } from 'react-router-dom';

const ViewProfile = () => {
	const {id} = useParams();

	return (
		<LayoutLoginRegister>
			<h1>{id}</h1>
			<Update id={''} name={''} password={''} email={''} phone={''}   />
			<ImgUser src={userImg} alt='imagem do usuário' />
		</LayoutLoginRegister>
	);
};

export default ViewProfile; 
