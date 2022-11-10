import React, { useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { createContext } from 'react';
const auth=getAuth(app)
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const providerLogin = (Provider) => {
      setLoading(true);

        return signInWithPopup(auth, Provider);
      };
      const emailpassSignin = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
      };
      const userCreateemailpass = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
      };
      const logout = () =>{
        setLoading(true);

        localStorage.removeItem('Photography-token');
        return signOut(auth);
    }
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setLoading(false);

          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);
      const authInfo={loading,setLoading,logout,user,providerLogin,emailpassSignin,userCreateemailpass};

    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default Authprovider;