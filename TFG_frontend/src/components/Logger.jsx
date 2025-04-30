import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../assets/Loading.jsx";

const Logger = () => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if (isLoading) {
    return <Loading style={{ width: "40px" }} />;
  }

  return isAuthenticated ? (
    <div className="d-flex align-items-center gap-2">
      <img src={user.picture} alt={user.name} className="rounded-circle" style={{ width: "36px", height: "36px" }} />
      <span className="text-white">{user.name}</span>
      <button className="btn btn-sm btn-outline-danger" onClick={() => logout({ returnTo: window.location.origin })}>
        Cerrar sesión
      </button>
    </div>
  ) : (
    <button className="btn btn-sm btn-primary" onClick={() => loginWithRedirect()}>
      Iniciar sesión
    </button>
  );
};

export default Logger;
