const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión del parque natural del Despeñaperros.",
  "La Consejería de Medio Ambiente podrá limitar, condicionar o someter a autorización, de forma cautelar e inmediata, por un tiempo determinado o de manera permanente, el desarrollo de cualquier tipo de actividad en un determinado lugar, cuando existan razones justificadas.",
  "La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de las nuevas actividades deportivas, de turismo activo o de ecoturismo que se declaren.",
  "La práctica y el desarrollo de las actividades de uso público y educación ambiental se realizará asegurando la conservación del patrimonio natural y cultural."
];

const forbiddenActivities = [
  "La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros, ni por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos e inundados.",
  "La circulación campo a través o fuera de los caminos permitidos de bicicleta y vehículos a motor.",
  "El paracaidismo.",
  "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor.",
  "La circulación en quads vinculada a actividades de uso público."
];

const authorizationActivities = [
  "Bicicleta de montaña en Zonas de reserva (A).",
  "Actividades aeronáuticas: globo aerostático.",
  "Escalada: en Zonas de reserva (A) y, del 1 de diciembre al 31 de agosto, en zonas donde se produzca nidificación y crías de aves rapaces.",
  "Turismo ecuestre en Zonas de reserva (A).",
  "Travesía, montañismo: en Zonas de reserva (A).",
  "Senderismo: en Zonas de reserva (A).",
  "Vivaqueo, entendiendo por tal la actividad de pasar la noche al aire libre utilizando el material específico para estos menesteres, como el saco de dormir, la funda de vivac o tiendas de campaña de pequeña envergadura.",
  "La circulación de vehículos a motor en Zonas de reserva (A)",
  "Las caravanas con 4 o más vehículos.",
  "Salto desde el puente y salto con elástico: en Zonas de reserva (A).",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
  "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000, de 31 de enero, sobre la organización de acampadas y campamentos juveniles de Andalucía.",
  "La apertura de nuevas vías o escuelas de escalada y el reequipamiento y el desequipamiento de las existentes.",
  "El establecimiento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor.",
  "La creación de camping y áreas de acampada.",
  "La puesta en valor de nuevos senderos peatonales y su señalización."
];

const prugActivities = [
  "Con carácter general, el acceso y tránsito de visitantes será libre por los viales de la red pública de caminos según la normativa vigente, exceptuando los que presenten señalización que indique una restricción o limitación de paso.",
  "La Consejería de Medio Ambiente podrá limitar o restringir, a los visitantes en general o a cierto tipo de transporte, de forma eventual o permanentemente, el acceso por cualquier camino público cuando exista causa justificada por impacto ambiental, incompatibilidad del uso con la conservación, con los trabajos forestales o de aprovechamiento de los recursos y por motivos de riesgo a las personas."
];

const VehiclesActivities = () => (
  <div>
    <h5>Vehículos a motor:</h5>
    <ul className="list-group mb-4 border border-dark">
      <li className="list-group-item list-group-item-dark">En caminos de tierra, la velocidad máxima será de 40 km/h salvo indicación expresa.</li>
      <li className="list-group-item list-group-item-dark">Los vehículos no podrán salirse de los caminos, excepto en los lugares previstos para ello.</li>
      <li className="list-group-item list-group-item-light">
        Cuando se empleen vehículos todoterreno para la observación de la fauna, se seguirán las siguientes condiciones:
        <ul>
          <li className="list-group-item">La distancia mínima a los animales será de 100m.</li>
          <li className="list-group-item">No se producirán ruidos o sonidos estridentes.</li>
          <li className="list-group-item">No se arrojarán alimentos ni se realizarán cebados.</li>
          <li className="list-group-item">No se interceptará el movimiento de los animales observados.</li>
          <li className="list-group-item">No se circulará a más de 20 km/h en las inmediaciones de los animales.</li>
          <li className="list-group-item">No se utilizará iluminación artificial alguna.</li>
          <li className="list-group-item">No se usará ningún sistema de atracción, captura o repulsión de animales.</li>
        </ul>
      </li>
    </ul>
  </div>
);

const Sections = ({ title, items }) => (
  <section className="mb-4 mt-4 border border-dark p-2">
    <h4 className="ms-4">{title}</h4>
    <ul className="list-group mb-4 border border-dark">
      {items.map((item, index) => (
        <li key={index} className={`list-group-item ${index % 2 === 0 ? "list-group-item-dark" : ""}`}>
          {item}
        </li>
      ))}
    </ul>
  </section>
);

const DespeniaperrosRestrictions = () => {

  return (
    <div className="container mt-4 border border-warning p-4">
      <h3 className="mb-4">Restricciones del parque natural del Despeñaperros</h3>
      <Sections title="Normas Generales" items={generalRules} />
      <Sections title="Actividades no permitidas" items={forbiddenActivities} />
      <Sections title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
      <Sections title="PRUG:" items={prugActivities} />
      <VehiclesActivities />

    </div>
  );
};

export default DespeniaperrosRestrictions;