const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, turismo activo y ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente."
];

const forbiddenActivities = [
  "Las bicicletas de montaña, turismo ecuestre y vehículos terrestres a motor en los senderos peatonales de uso público clasificados como tal por la Consejería de Medio Ambiente.",
  "La circulación de vehículos terrestres a motor por caminos rurales de uso restringido, por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos o inundados.",
  "La circulación campo a través o fuera de los caminos permitidos de bicicletas y vehículos a motor.",
  "La acampada libre.",
  "El paracaidismo.",
  "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones y avionetas y cualquier vehículo aéreo con motor, incluyendo el vuelo con ultraligero.",
  "La circulación de quads en actividades vinculadas al uso público en todo el Parque Natural. "
];

const authorizationActivities = [
  "Actividades aeronáuticas con globo aerostático.",
  "Las caravanas de 4 o de más vehículos terrestres a motor. ",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
  "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000, de 31 de enero, sobre la organización de acampadas y campamentos juveniles de Andalucía.",
  "El tránsito, para la realización de actividades de educación ambiental, por caminos de acceso restringido por motivos de conservación.",
  "El establecimiento de áreas de despegue o aterrizaje para actividades aeronáuticas sin motor, así como la señalización de las mismas.",
  "La puesta en valor de nuevos senderos peatonales y su señalización.",
  "Aquellas romerías o concentraciones de carácter popular que hayan iniciado su actividad durante los últimos 10 años o la vayan a iniciar en la actualidad.",
  "La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de las nuevas actividades deportivas, de turismo activo o de ecoturismo que se declaren."
];

const prugActivities = [
  // Hay que rellenarlo
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

const MontesMalagaRestrictions = () => {
  return (
    <div className="container mt-4 border border-warning p-4">
      <h3 className="mb-4">Restricciones del parque natural Montes de Málaga</h3>
      <Sections title="Normas Generales" items={generalRules} />
      <Sections title="Actividades no permitidas" items={forbiddenActivities} />
      <Sections title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
      <Sections title="PRUG:" items={prugActivities} />
    </div>
  );
};
  
  export default MontesMalagaRestrictions;