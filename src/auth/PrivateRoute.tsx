import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';
import { PrivateRouteProps } from '../assets/interfaces/index';

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
