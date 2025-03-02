const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de mpresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de nero, y en el la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión",
  "La Consejería de Medio Ambiente podrá limitar, condicionar o someter a autorización, de forma cautelar e inmediata, por un tiempo determinado o de manera permanente, el desarrollo de cualquier tipo de actividad en un determinado lugar, cuando existan razones justificadas.",
  "La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de las nuevas actividades deportivas, de turismo activo o de ecoturismo que se declaren.",
];

const forbiddenActivities = [
  "La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros, ni por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos e inundados.",
  "La circulación campo a través o fuera de los caminos permitidos de bicicleta y vehículos a motor.",
  "La circulación en quads vinculada a actividades de uso público en todo el Parque Natural.",
  "El paracaidismo en todo el Parque Natural.",
  "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor.",
  "El uso de embarcaciones a motor con potencia superior a 20 HP en los embalses del Jándula y del Encinarejo.",
];

const authorizationActivities = [
  "Bicicleta de montaña en Zonas de reserva (A).",
  "Turismo ecuestre en Zonas de reserva (A)",
  "Senderismo en Zonas de reserva (A).",
  "Vivaqueo, entendiendo por tal la actividad de pasar la noche al aire libre utilizando el material específico para estos menesteres, como el saco de dormir, la funda de vivac o tiendas de campaña de pequeña envergadura.",
  "Circulación de vehículos a motor en Zonas de reserva (A).",
  "Circulación de caravanas con 4 o más vehículos.",
  "Actividades aeronaúticas: globo aerostático.",
  "El uso de embarcaciones a motor con potencia inferior a 20 HP en los embalses del Jándula y del Encinarejo.",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requieran la instalación de dotaciones, incluso cuando éstas sean provisionales.",
  "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000, de 31 de enero, sobre la organización de acampadas y campamentos juveniles de Andalucía.",
  "El establecimiento de áreas de despegue o aterrizaje para actividades aeronáuticas sin motor, así como la señalización de las mismas.",
  "La puesta en valor de nuevos senderos peatonales y su señalización.",
  "Aquellas romerías o concentraciones de carácter popular que hayan iniciado su actividad durante los últimos 10 años o la vayan a iniciar en la actualidad."
];

const prugActivities = [
  //A rellenar
];

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

const SierraAndujarRestrictions = () => {
  return (
    <div className="container mt-4 border border-warning p-4">
      <h3 className="mb-4">Restricciones del parque natural de Sierra de Andújar</h3>
      <Sections title="Normas Generales" items={generalRules} />
      <Sections title="Actividades no permitidas" items={forbiddenActivities} />
      <Sections title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
      <Sections title="PRUG:" items={prugActivities} />
    </div>
  );
};
  
  export default SierraAndujarRestrictions;