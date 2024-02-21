// import { createContext, FC, useContext, useEffect, useState } from 'react';
// import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase';
// import { AuthContextType, AuthContextProviderProps } from '../assets/interfaces/index';

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<any>({});

//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithRedirect(auth, provider);
//   };

//   const logOut = () => {
//     signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ googleSignIn, logOut, user }}>{children}</AuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useUserAuth must be used within an AuthContextProvider');
//   }
//   return context;
// };

import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

interface AuthContextType {
  googleSignIn: () => void;
  logOut: () => void;
  user: any; // Update the type as per your user object structure
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<any>({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useUserAuth must be used within an AuthContextProvider');
  }
  return context;
};
