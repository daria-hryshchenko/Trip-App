import { ReactNode } from 'react';

// for CountDown
export interface CountDownProps {
  start: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// for AddTrip

export interface ModalPropsI {
  handleClose: () => void;
  show: boolean;
  trips: Array<TripI>;
}

export interface DateInputI {
  year: string;
  month: string;
  day: string;
}

// for Home Page

export interface WeatherData {
  datetime: string;
  icon: string;
  temp: number;
  tempmax: number;
  tempmin: number;
}

export interface WeatherToday {
  datetime: string;
  icon: string;
  temp: number;
}

export interface TripI {
  id: string;
  cityName: string;
  img: string;
  startTrip: string;
  endTrip: string;
}

// for AuthContext
export interface AuthContextType {
  googleSignIn: () => void;
  logOut: () => void;
  user: any;
}

export interface AuthContextProviderProps {
  children: ReactNode;
}

// for firebase

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// for PrivateRoute

export interface PrivateRouteProps {
  children: ReactNode;
}
