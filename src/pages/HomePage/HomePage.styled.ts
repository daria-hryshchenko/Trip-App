import styled from 'styled-components';
import Icon from '../../assets/Icon.svg';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 312px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 1020px;
  }
`;

export const HeroImage = styled.img`
  width: 312px;
  height: 104px;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    width: 600px;
    height: 200px;
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  position: relative;
  width: 320px;
  height: 56px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 1020px;
  }
`;

export const IconFind = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 16px 16px 40px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;

  &::placeholder {
    font-size: 16px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const CharactersList = styled.div`
  display: flex;
  flex-direction: wrap;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;
  margin-bottom: 223px;

  @media screen and (min-width: 1440px) {
    margin-top: 61px;
    gap: 20px;
    margin-bottom: 188px;
  }
`;

export const CharacterItem = styled.div`
  margin: 0;
  padding: 0;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  @media screen and (min-width: 1440px) {
    width: 240px;
    height: 244px;
  }
`;

export const NavToCharacter = styled(NavLink)`
  text-decoration: none;
  width: 312px;
  height: 308px;
  margin: 0;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    width: 240px;
    height: 244px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 312px;
  height: 232px;

  @media screen and (min-width: 1440px) {
    width: 240px;
    height: 168px;
  }
`;

export const List = styled.ul`
  height: 76px;
  width: 312px;
  margin: 0;
  padding: 12px 16px;

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 240px;
  }
`;

export const NameCharacter = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

export const SpeciesCharacter = styled.li`
  font-size: 14px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: 0.25px;
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;

export const Iframe = styled.iframe`
  width: 100%;
  border: 0;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: #000;
  letter-spacing: 0.25px;
`;
