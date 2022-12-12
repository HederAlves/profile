import { useMutation } from '@apollo/client';
import { ButtonSecund } from '../../commonStyles';
import { DELETE_USER } from '../../graphql/mutation/User';
import { GET_USERS } from '../../graphql/queries/Users';

interface IProps { id: string }

const Delete = (props: IProps) => {
	const { id } = props;
	const [deleteUser] = useMutation(DELETE_USER);

	const handleDeleteUser = () => {
		deleteUser({
			variables: {
				deleteUser: id
			},
			refetchQueries: [GET_USERS]
		});
	};
	return <ButtonSecund onClick={handleDeleteUser}>Excluir</ButtonSecund>
};

export default Delete;
