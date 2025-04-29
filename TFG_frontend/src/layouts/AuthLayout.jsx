import { Auth0Provider } from "@auth0/auth0-react";

const AuthLayout = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-01ujkdlvuv2fm5gp.eu.auth0.com"
      clientId="DC77HTyNqu70Mm0pi2n63H6QquZ6aCUJ"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "http://parkTracker-api",
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthLayout;
