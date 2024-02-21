import { FC, useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { AddTrip } from '../../components/AddTrip/AddTrip';
import {
  Label,
  IconFind,
  InputSearch,
  List,
  Trip,
  HomePageContainer,
  WeatherContainer,
  TripContainer,
  Title,
  Item,
  TripImg,
  ButtonAddTrip,
  DescriptionTrip,
  WeatherCard,
  WrapLine,
  Inform,
  ListWeather,
  ItemWeather,
  WeatherContainerList,
  WeatherText,
} from './HomePage.styled';
import { CountDown } from '../../components/CountDown/CountDown';
import { WeatherData, WeatherToday, TripI } from '../../assets/interfaces/index';

const keyApi: string = import.meta.env.VITE_API_KEY_WEATHER;

export const HomePage: FC = () => {
  const [trips, setTrips] = useState<TripI[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData[] | null>(null);
  const [weatherToday, setWeatherToday] = useState<WeatherToday | null>(null);
  const [startTrip, setStartTrip] = useState<string>('');
  const [endTrip, setEndTrip] = useState<string>('');

  let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let dateNow = new Date().toISOString().split('T')[0];

  useEffect(() => {
    axios
      .get<TripI[]>('https://65d13dbaab7beba3d5e4371f.mockapi.io/trip')
      .then((res) => {
        setTrips(res.data);
      })
      .catch((error) => {
        console.error('Error fetching trip data:', error);
      });
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (selectedCity) {
        try {
          const response = await axios.get(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/${startTrip}/${endTrip}?unitGroup=metric&key=${keyApi}&contentType=json`,
          );

          setWeather(response.data.days);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };

    fetchWeatherData();
  }, [selectedCity, startTrip, endTrip]);

  useEffect(() => {
    const fetchWeatherToday = async () => {
      if (selectedCity) {
        try {
          const response = await axios.get(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/today?unitGroup=metric&key=${keyApi}&contentType=json`,
          );

          setWeatherToday(response.data.currentConditions);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };

    fetchWeatherToday();
  }, [selectedCity]);

  const handleSelectTrip = (cityName: string) => {
    setSelectedCity(cityName);
  };

  useEffect(() => {
    const countDown = () => {
      if (selectedCity) {
        const selectedTrip = trips.find((el) => el.cityName === selectedCity);
        if (selectedTrip) {
          setStartTrip(selectedTrip.startTrip);
          setEndTrip(selectedTrip.endTrip);
        }
      }
    };

    countDown();
  }, [selectedCity, trips]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const getImagePath = () => {
    if (
      weatherToday?.icon === 'cloudy' ||
      (weather && weather.some((data) => data.icon === 'cloudy'))
    ) {
      return 'https://i.ibb.co/WHnkMw4/cloudy.png';
    } else if (
      weatherToday?.icon === 'snow' ||
      (weather && weather.some((data) => data.icon === 'snow'))
    ) {
      return 'https://i.ibb.co/Z295ZC6/snow.png';
    } else if (
      weatherToday?.icon === 'rain' ||
      (weather && weather.some((data) => data.icon === 'rain'))
    ) {
      return 'https://i.ibb.co/W61jjWW/rain.png';
    } else if (
      weatherToday?.icon === 'fog' ||
      (weather && weather.some((data) => data.icon === 'fog'))
    ) {
      return 'https://i.ibb.co/kB6hRP2/fog.png';
    } else if (
      weatherToday?.icon === 'wind' ||
      (weather && weather.some((data) => data.icon === 'wind'))
    ) {
      return 'https://i.ibb.co/HXRcqzv/wind.png';
    } else if (
      weatherToday?.icon === 'partly-cloudy-day' ||
      (weather && weather.some((data) => data.icon === 'partly-cloudy-day'))
    ) {
      return 'https://i.ibb.co/NsMg08s/partly-cloudy-day.png';
    } else if (
      weatherToday?.icon === 'partly-cloudy-night' ||
      (weather && weather.some((data) => data.icon === 'partly-cloudy-night'))
    ) {
      return 'https://i.ibb.co/6DpMw3n/partly-cloudy-night.png';
    } else if (
      weatherToday?.icon === 'clear-day' ||
      (weather && weather.some((data) => data.icon === 'clear-day'))
    ) {
      return 'https://i.ibb.co/RS2T3CY/clear-day.png';
    } else if (
      weatherToday?.icon === 'clear-night' ||
      (weather && weather.some((data) => data.icon === 'clear-night'))
    ) {
      return 'https://i.ibb.co/KN7bgRP/clear-night.png';
    } else if (
      weatherToday?.icon === 'thunder' ||
      (weather && weather.some((data) => data.icon === 'thunder'))
    ) {
      return 'https://i.ibb.co/10f8zgW/thunder.png';
    }
    return 'https://i.ibb.co/HXRcqzv/wind.png';
  };

  return (
    <HomePageContainer>
      <TripContainer>
        <Title>
          Weather <span style={{ fontWeight: 'bold' }}>Forecast</span>
        </Title>
        <Label>
          <IconFind />
          <InputSearch type="text" placeholder="Search your trip" onChange={handleChange} />
        </Label>
        <Trip>
          {trips
            .filter((el) => {
              return (el.startTrip && el.endTrip) !== '' && el.startTrip >= dateNow;
            })
            .filter((el) => {
              return query.toLocaleUpperCase() === ''
                ? trips
                : el.cityName.toLowerCase().includes(query);
            })
            .map((trip) => (
              <List key={trip.id} onClick={() => handleSelectTrip(trip.cityName)}>
                <Item>
                  <TripImg src={trip.img} />
                  <DescriptionTrip>
                    <h4>{trip.cityName}</h4>
                    <p>
                      {trip.startTrip.split('-').reverse().join('.')} -{' '}
                      {trip.endTrip.split('-').reverse().join('.')}
                    </p>
                  </DescriptionTrip>
                </Item>
              </List>
            ))}
          <ButtonAddTrip onClick={toggleModal} className="btn-modal">
            + <br />
            Add Trip
          </ButtonAddTrip>
        </Trip>
        <AddTrip show={modal} handleClose={() => setModal(false)} trips={trips} />
        <div>
          <h2>Week</h2>
          {selectedCity && weather && (
            <WeatherContainerList>
              {weather.map((el, index) => (
                <ListWeather key={index}>
                  <ItemWeather>
                    <WeatherText>{daysArray[new Date(el.datetime).getDay()]}</WeatherText>
                    <img width={60} src={getImagePath()} alt="Weather Image" />
                    <WeatherText>
                      {el.tempmax}° / {el.tempmin}°
                    </WeatherText>
                  </ItemWeather>
                </ListWeather>
              ))}
            </WeatherContainerList>
          )}
        </div>
      </TripContainer>
      <WeatherContainer>
        <div>
          {selectedCity && weatherToday && (
            <WeatherCard>
              <Inform>{daysArray[new Date().getDay()]}</Inform>
              <WrapLine>
                <img src={getImagePath()} alt="Weather Image" />
                <p style={{ fontSize: '38px' }}>
                  {weatherToday.temp} <sup>℃</sup>
                </p>
              </WrapLine>
              <Inform>{selectedCity}</Inform>
              <CountDown start={startTrip} />
            </WeatherCard>
          )}
        </div>
      </WeatherContainer>
    </HomePageContainer>
  );
};
