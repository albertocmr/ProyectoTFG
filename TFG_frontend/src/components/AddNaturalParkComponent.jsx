import React, { useState, useEffect } from "react";
import axios from "axios";

const AddNaturalParkComponent = ({ id }) => {
  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [perimeterfile, setPerimeterfile] = useState("");

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/natural_parks/${id}`)
        .then((response) => {
          const park = response.data;
          setName(park.name);
          setProvince(park.province);
          setPerimeterfile(park.perimeterfile);
        })
        .catch((error) => console.error("Error al cargar el parque:", error));
    }
  }, [id]);

  const saveOrUpdateNaturalPark = async (e) => {
    e.preventDefault();
    
    const naturalPark = { name, province, perimeterfile };

    try {
      if (id) {
        await axios.put(`http://localhost:8080/api/natural_parks/${id}`, naturalPark);
        console.log("Parque actualizado");
      } else {
        await axios.post("http://localhost:8080/api/natural_parks", naturalPark);
        console.log("Parque guardado");
      }

      window.location.href = "/managementdb";
    } catch (error) {
      console.error("Error al guardar el parque:", error);
    }
  };

  return (
    <div className="container border rounded pt-2 pb-4 shadow p-3 mt-5 rounded">
      <h1 className="fs-3">{id ? "Editar Parque Natural" : "Registro de Parque Natural"}</h1>
      <form onSubmit={saveOrUpdateNaturalPark}>
        <div className="form-group mb-2 mt-2">
          <div className="form-floating mb-3">
            <input type="text" id="name" placeholder="" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="floatingInput">Nombre del parque natural</label>
          </div>
        </div>

        <div className="form-group mb-2">
          <div className="form-floating mb-3">
            <input type="text" id="province" placeholder="" className="form-control" value={province} onChange={(e) => setProvince(e.target.value)} />
            <label htmlFor="floatingInput">Provincia</label>
          </div>
        </div>

        <div className="form-group mb-2">
          <div className="form-floating mb-3">
            <input type="text" id="perimeterfile" placeholder="" className="form-control" value={perimeterfile} onChange={(e) => setPerimeterfile(e.target.value)} />
            <label htmlFor="perimeterfile">Archivo Perímetro</label>
          </div>
        </div>

        <button type="submit" className="btn btn-success">{id ? "Actualizar" : "Guardar"}</button>
        &nbsp;&nbsp;
        <a href="/managementdb" className="btn btn-danger">Cancelar</a>
      </form>
    </div>
  );
};

export default AddNaturalParkComponent;
