import { FC, useState, useEffect } from 'react';
import {
  CountDownValue,
  CountDownContainer,
  CountDownRow,
  CountDownLabel,
} from './CountDown.styled';

import { getTimeForTimer } from '../../assets/helpers/index';
import { CountDownProps, TimeLeft } from '../../assets/interfaces/index';

export const CountDown: FC<CountDownProps> = ({ start }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeForTimer(start));
  const { days, hours, minutes, seconds } = timeLeft;
  console.log(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeForTimer(start));
    }, 1000);

    return () => clearInterval(timer);
  }, [start]);

  return (
    <CountDownContainer>
      <CountDownRow>
        <CountDownValue>{days}</CountDownValue>
        <CountDownLabel>Days</CountDownLabel>
      </CountDownRow>
      <CountDownRow>
        <CountDownValue>{hours}</CountDownValue>
        <CountDownLabel>Hours</CountDownLabel>
      </CountDownRow>
      <CountDownRow>
        <CountDownValue>{minutes}</CountDownValue>
        <CountDownLabel>Minutes</CountDownLabel>
      </CountDownRow>
      <CountDownRow>
        <CountDownValue>{seconds}</CountDownValue>
        <CountDownLabel>Seconds</CountDownLabel>
      </CountDownRow>
    </CountDownContainer>
  );
};
