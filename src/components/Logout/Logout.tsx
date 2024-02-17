import { FC } from 'react';
import { UserAuth } from '../../auth/AuthContext';
import { Container, Title, Button, List, Item } from './Logout.styled';

const Logout: FC = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <List>
        <Item>
          <Title>Welcome,{user?.displayName}</Title>
        </Item>
        <Item>
          <Button onClick={handleSignOut}>Logout</Button>
        </Item>
      </List>
    </Container>
  );
};

export default Logout;
