import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
