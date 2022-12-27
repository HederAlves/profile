import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../graphql/queries/Users';
import { User } from '../../types';
import { ButtonSecund, LayoutRowWrap } from '../../commonStyles';
import { Card, CardHeader, CardMain, ImgUser, InfoUser } from './style';
import { Link, } from 'react-router-dom';
import Delete from './Delete';
import userImg from '../../../doc/images/user.png';

const View = () => {

  const { data, loading } = useQuery<{ user: User[] }>(GET_USERS);

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <LayoutRowWrap>
      {data?.user.map(_user =>
        <Card key={_user.id}>
          <CardHeader>
            <ImgUser src={userImg} alt='imagem do usuário' />
            <Delete id={_user.id} />
          </CardHeader>
          <CardMain>
            <InfoUser>
              <li>{_user.name}</li>
              <li>{_user.email}</li>
              <li>{_user.phone}</li>
            </InfoUser>
            <Link to={'/perfil/' + _user.id}>
              <ButtonSecund>Atualizar</ButtonSecund>
            </Link>
          </CardMain>
        </Card>)}
    </LayoutRowWrap>
  );
}

export default View;
