import React, { useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { createContext } from 'react';
const auth=getAuth(app)
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);

    const providerLogin = (Provider) => {
        return signInWithPopup(auth, Provider);
      };
      const emailpassSignin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };
      const userCreateemailpass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    const logout = () => {
        return signOut(auth);
      };
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);
      const authInfo={logout,user,providerLogin,emailpassSignin,userCreateemailpass};

    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default Authprovider;