import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";

const AxiosInterceptor = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const id = axios.interceptors.request.use(
      async config => {
        if (isAuthenticated) {
          try {
            const token = await getAccessTokenSilently();
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
          } catch (e) {
            console.warn("No se pudo obtener token:", e);
          }
        }
        return config;
      },
      error => Promise.reject(error)
    );
    return () => axios.interceptors.request.eject(id);
  }, [isAuthenticated, getAccessTokenSilently]);

  return null;
};

export default AxiosInterceptor;
