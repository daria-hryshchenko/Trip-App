import { Suspense, FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import PrivateRoute from './auth/PrivateRoute';
import { AuthContextProvider } from './auth/AuthContext';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Container } from './App.styled';

export const App: FC = () => {
  return (
    <Container>
      <AuthContextProvider>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<div>Page not found </div>} />
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </Container>
  );
};
