// src/components/AuthProvider.jsx
import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider = ({ children }) => {
  const domain = "dev-01ujkdlvuv2fm5gp.eu.auth0.com";
  const clientId = "DC77HTyNqu70Mm0pi2n63H6QquZ6aCUJ";
  const audience = "http://parkTracker-api";

  return (
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
            redirect_uri: window.location.origin,
            audience: audience,
        }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
