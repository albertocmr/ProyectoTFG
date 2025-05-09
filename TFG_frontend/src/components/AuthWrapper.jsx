// src/components/AuthWrapper.jsx
import React from "react";
import AuthProvider from "./AuthProvider.jsx";
import Logger from "./Logger.jsx";
import AxiosInterceptor from "./AxiosInterceptor.jsx";

export default function AuthWrapper({ children }) {
  return (
    <AuthProvider>
      <AxiosInterceptor />
      {children}
      <Logger />
    </AuthProvider>
  );
}
