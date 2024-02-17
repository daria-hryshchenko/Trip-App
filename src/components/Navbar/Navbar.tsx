import { FC } from 'react';
import { UserAuth } from '../../auth/AuthContext';
import Logout from '../Logout/Logout';
import { Container } from './Navbar.styled';

const Navbar: FC = () => {
  const { user } = UserAuth();
  return <Container>{user?.displayName ? <Logout /> : <div></div>}</Container>;
};

export default Navbar;
