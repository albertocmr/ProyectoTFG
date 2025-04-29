import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../assets/Loading.jsx";

const Logger = () => {
  const { isLoading, logout, isAuthenticated, user } = useAuth0();


  if (isLoading) {
    return( <Loading style={{ width: "50px", }}/>)
  }

  return (
    <div className="d-flex align-items-center gap-3">
      {isAuthenticated ? (
        <>
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-circle"
            style={{ width: "40px", height: "40px" }}
          />
          <span className="text-white">{user.name}</span>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="btn btn-primary" onClick={() => loginWithRedirect()}>
      Iniciar sesión
    </button>
  );
}

export default Logger;
