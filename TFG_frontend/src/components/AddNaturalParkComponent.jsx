import { useState, useEffect } from "react";
import axios from "axios";

const AddNaturalParkComponent = ({ id }) => {
  const [park, setPark] = useState({ name: "", province: "", perimeterfile: "" });

  useEffect(() => {
    if (!id) return;

    axios.get(`https://parktracker.onrender.com/api/natural_parks/${id}`)
      .then(res => setPark(res.data))
      .catch(error => console.error("Error al cargar parque:", error));
  }, [id]);

  const handleChange = e => {
    setPark({ ...park, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const req = id
      ? axios.put(`https://parktracker.onrender.com/api/natural_parks/${id}`, park)
      : axios.post(`https://parktracker.onrender.com/api/natural_parks`, park);

    req
      .then(res => {
        console.log(id ? "Actualizado:" : "Creado:", res.data);
        window.location.href = "/managementdb";
      })
      .catch(err => console.error("Error guardando:", err));
  };

  return (
    <div className="container p-4">
      <div className="bg-white shadow-xl rounded-2xl border p-4">
        <h1 className="fs-4 text-center mb-1"><strong>{id ? "Editar Parque Natural" : "Registro de Parque Natural"}</strong></h1>
        <form className="p-3" onSubmit={handleSubmit}>
          {["name","province","perimeterfile"].map(field => (
            <div key={field} className="form-floating mb-3">
              <input
                type="text"
                id={field}
                className="form-control"
                value={park[field]}
                onChange={handleChange}
                placeholder=""
              />
              <label htmlFor={field}>
                { field === "name" ? "Nombre" :
                  field === "province" ? "Provincia" :
                  "Archivo perímetro" }
              </label>
            </div>
          ))}
          <button type="submit" className="btn btn-success">
            {id ? "Actualizar" : "Guardar"}
          </button>
          &nbsp;
          <a href="/managementdb" className="btn btn-danger">Cancelar</a>
        </form>
      </div>
    </div>
  );
};

export default AddNaturalParkComponent;
