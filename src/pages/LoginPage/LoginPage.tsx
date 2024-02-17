import React, { useEffect } from 'react';
import { UserAuth } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, Iframe, List, Item } from './LoginPage.styled';
import { HeroImage } from '../HomePage/HomePage.styled';
import HeroImg from '../../assets/images/thenewroadtrip-nz-800-b-e1526466861459.png';
import GoogleButton from 'react-google-button';

export const LoginPage: React.FC = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/home');
    }
  }, [navigate, user]);

  return (
    <Container>
      <List>
        <Item>
          <HeroImage src={HeroImg} alt="Mountains" />
        </Item>
        <Item>
          <GoogleButton onClick={handleGoogleSignIn} />
          <Iframe
            src="https://giphy.com/embed/4cFQFUZ2nNoVA3sIzM"
            className="giphy-embed"
            allowFullScreen></Iframe>
        </Item>
      </List>
    </Container>
  );
};
