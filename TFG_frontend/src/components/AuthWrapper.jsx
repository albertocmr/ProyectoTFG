import React from "react";
import AuthProvider from "./AuthProvider.jsx";
import Logger from "./Logger.jsx";
import AxiosInterceptor from "./AxiosInterceptor.jsx";

export default function AuthWrapper() {
  return (
    <AuthProvider>
      <AxiosInterceptor />
      <Logger />
    </AuthProvider>
  );
}