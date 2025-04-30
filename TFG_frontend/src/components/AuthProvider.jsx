import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider = ({ children }) => {
  const domain = import.meta.env.PUBLIC_AUTH0_DOMAIN;
  const clientId = import.meta.env.PUBLIC_AUTH0_CLIENTID;
  const audience = import.meta.env.PUBLIC_AUTH0_AUDIENCE;
  const redirect_uri = import.meta.env.PUBLIC_AUTH0_REDIRECT_URI;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirect_uri, // window.location.origin
        audience: audience,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
