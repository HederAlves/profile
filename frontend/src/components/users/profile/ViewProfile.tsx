import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../../graphql/queries/Users';
import { User } from '../../../types';
import userImg from '../../../../doc/images/user.png';
import { ImgUser, LayoutLoginRegister } from '../style';
import Update from '../Update';

const ViewProfile = () => {
	const { data, loading } = useQuery<{ user: User[] }>(GET_USERS);

	if (loading) {
		return <p>Carregando...</p>;
	}

	return (
		<LayoutLoginRegister>
			<Update id={''} name={''} password={''} email={''} phone={''} />
			<ImgUser src={userImg} alt='imagem do usuário' />
		</LayoutLoginRegister>

	);
};

export default ViewProfile; 
