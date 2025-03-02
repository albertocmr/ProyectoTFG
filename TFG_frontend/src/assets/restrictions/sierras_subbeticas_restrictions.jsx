const generalRules = [
  "El desarrollo de las actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y Medio Ambiente y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión.",
  "La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de nuevas actividades deportivas, de turismo activo o de ecoturismo que se declaren.",
  "La Consejería de Medio Ambiente podrá limitar, condicionar o someter a autorización, de forma cautelar e inmediata, por un tiempo determinado o de manera permanente, el desarrollo de cualquier tipo de actividad en un determinado lugar, cuando existan razones justificadas."
];

const forbiddenActivities = [
  "La circulación de vehículos terrestres a motor por caminos rurales de uso restringido, por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos o inundados.",
  "La circulación de vehículos campo a través.",
  "Las bicicletas de montaña, turismo ecuestre y vehúcilos terrestres a motor en los senderos peatonales de uso público clasificados como tal por la Consejería de Medio Ambiente.",
  "El paracaidismo.",
  "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor.",
  "La circulación de quads vinculada a actividades de uso público."
];

const authorizationActivities = [
  "Actividades aeronáuticas: globo aerostático.",
  "Bicicleta de montaña en Zonas de reserva (A).",
  "Las caravanas con 4 o más vehículos.",
  "Turismo ecuestre en Zonas de Reserva (A).",
  "Senderismo en Zonas de Reserva (A).",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
  "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
  "Vivaqueo, entendiendo por tal la actividad de pasar la noche al aire libre utilizando el material específico para estos menesteres, como el saco de dormir o la funda de vivac.",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000, de 31 de enero, sobre la organización de acampadas y campamentos juveniles de Andalucía.",
  "El tránsito, para la realización de actividades de educación ambiental, por caminos de acceso restringido por motivos de conservación",
  "El establecimiento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor.",
  "La puesta en valor de nuevos senderos peatonales y su señalización.",
  "Aquellas romerías o concentraciones de carácter popular que hayan iniciado su actividad durante los últimos 10 años o la vayan a iniciar en la actualidad."
];

const prugActivities = [

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


const SierrasSubbeticasRestrictions = () => {
  return (
    <div className="container mt-4 border border-dark p-4">
      <h3 className="mb-4">Restricciones del Parque Natural Sierras Subbéticas</h3>
      <Sections title="Normas Generales" items={generalRules} />
      <Sections title="Actividades no permitidas" items={forbiddenActivities} />
      <Sections title="Actividades sujetas a autorización" items={authorizationActivities} />
      <Sections title="PRUG:" items={prugActivities} />
    </div>
  );
};
  
  export default SierrasSubbeticasRestrictions;