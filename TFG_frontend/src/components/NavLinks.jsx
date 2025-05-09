import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const NavLinks = () => {
  const { isAuthenticated, user } = useAuth0();

  const roles = user?.["https://parktracker.local/roles"] || [];

  const isAuthorized = roles.includes("ADMIN");

  console.log(user);

  return (
    <ul className="navbar-nav mx-auto">
      <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
      <li className="nav-item"><a href="/createTrack" className="nav-link">Crea tu ruta</a></li>
      <li className="nav-item"><a href="/map" className="nav-link">Comprueba tu ruta</a></li>
      <li className="nav-item"><a href="/naturalParks" className="nav-link">Parques Naturales</a></li>
      {isAuthenticated && isAuthorized && (
        <li className="nav-item"><a href="/managementdb" className="nav-link">Gestión DDBB</a></li>
      )}
    </ul>
  );
};

export default NavLinks;
