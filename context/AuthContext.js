import React, { createContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const register = (username, email, password, confirmPassword) => {
    // setIsLoading(true);

    axios
      .post(`${BASE_URL}/register`, {
        username,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        // AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        // setIsLoading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`register error ${e}`);
        // setIsLoading(false);
      });
  };
  return (
    <AuthContext.Provider {...userInfo.map((reg) => (value = { reg }))}>
      {children}
    </AuthContext.Provider>
  );
};
