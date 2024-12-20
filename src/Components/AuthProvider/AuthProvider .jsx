import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../FirebaseConfig";


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignin = () => {
    return signInWithPopup(auth,googleProvider);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // if(currentUser){
      //     axios.post('http://localhost:5000/jwt',{email:currentUser.email})
      //     .then((data)=>{
      //       if(data.data){
      //         localStorage.setItem("access-token",data?.data?.token)
      //         setLoading(false)
      //       }
      //     })
      //   }
      //   else{
      //     localStorage.removeItem("access-token");
      //     setLoading(false);
      //   }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { createUser, googleSignin, login, logout, user, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
