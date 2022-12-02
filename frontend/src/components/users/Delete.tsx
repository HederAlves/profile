import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../../graphql/mutation/User";
import { GET_USERS } from "../../graphql/queries/Users";
import { Button } from "../../style";

interface IProps { id: string }

const Delete = (props: IProps) => {
  const { id } = props
  const [deleteUser] = useMutation(DELETE_USER);

  const handleDeleteUser = () => {
    deleteUser({
      variables: {
        deleteUser: id
      },
      refetchQueries: [GET_USERS]
    });
  };

  return (
    <div>
      <Button onClick={handleDeleteUser}>Excluir</Button>
    </div>
  );
}

export default Delete;
