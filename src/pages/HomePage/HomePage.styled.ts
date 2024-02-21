import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/Icon.svg';

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

export const HomePageContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
`;

export const WeatherContainer = styled.div`
  width: 40%;
  padding: 30px;
`;

export const WeatherCard = styled.div`
  background-color: #2c259a;
  weight: 200px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
`;

export const TripContainer = styled.div`
  width: 60%;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #000;
  font-weight: 100;
`;

export const Label = styled.label`
  position: relative;
  width: 100px;
  height: 56px;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

export const IconFind = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const InputSearch = styled.input`
  padding: 10px 10px 10px 40px;
  border-radius: 8px;
  border: none;
  background-color: #f2f4f8;

  &::placeholder {
    font-size: 12px;
    color: #000;
  }
`;

export const Trip = styled.div`
  margin: 20px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-x: auto;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Item = styled.li`
  text-align: left;
  line-height: 34px;
`;

export const TripImg = styled.img`
  display: block;
  width: 200px;
  height: 150px;
`;

export const ButtonAddTrip = styled.button`
  width: 200px;
  height: 150px;
  background-color: #f2f4f8;
  border: none;
  font-weight: bold;
  line-height: 24px;
`;

export const DescriptionTrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  font-size: 12px;
  line-height: 14px;
  gap: 5px;
  font-color: grey;
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

export const TripWrap = styled.div`
  margin: 50px auto;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const WrapLine = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const Inform = styled.h4`
  font-size: 26px;
  font-weight: 400;
  margin: 20px auto;
`;
export const CountDownContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 70%;
  justify-content: space-between;
`;

export const CountDownCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const CountDownItem = styled.div``;

export const CountDownLabel = styled.div``;

export const ListWeather = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ItemWeather = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WeatherContainerList = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 10px 0;
  overscroll-behavior-inline: contain;
  scroll-padding-inline: 1rem;
`;

export const WeatherText = styled.p`
  font-size: 10px;
  color: grey;
`;
