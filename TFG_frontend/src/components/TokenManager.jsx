import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const TokenManager = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) return;
    getAccessTokenSilently()
      .then(t => setToken(t))
      .catch(err => console.error("Error al sacar token:", err));
  }, [isAuthenticated, getAccessTokenSilently]);

  return null;
};

export default TokenManager;
