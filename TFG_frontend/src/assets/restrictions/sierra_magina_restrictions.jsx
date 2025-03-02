const generalRules = [
  "El desarrollo de las actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y Medio Ambiente y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión.",
  "La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de nuevas actividades deportivas, de turismo activo o de ecoturismo que se declaren.",
  "La Consejería de Medio Ambiente podrá limitar, condicionar o someter a autorización, de forma cautelar e inmediata, por un tiempo determinado o de manera permanente, el desarrollo de cualquier tipo de actividad en un determinado lugar, cuando existan razones justificadas."
];

const forbiddenActivities = [
  "La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros, ni por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos o inundados.",
  "La circulación de vehículos campo a través.",
  "Paracaidismo.",
  "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor.",
  "La circulación de quads vinculada a actividades de uso público."
];

const authorizationActivities = [
  "Actividades aeronáuticas: globo aerostático.",
  "Bicicleta de montaña en Zonas de reserva (A) y Zonas de distribución potencial de endemismos (B1).",
  "Escalada: en Zonas de reserva (A) y del 1 de diciembre al 31 de agosto, en zonas donde se produzca nidificación y cría de aves rapaces, periodo que podrá ser modificado si se realizan estudios posteriores que lo justifiquen.",
  "Vivaqueo, entendiendo por tal la actividad de pasar la noche al aire libre utilizando el material específico para estos menesteres, como el saco de dormir o la funda de vivac.",
  "Turismo ecuestre en Zonas de Reserva (A) y Zonas de distribución potencial de endemismos (B1).",
  "Travesía y montañismo en Zonas de Reserva (A) y Zonas de distribución potencial de endemismos (B1).",
  "Senderismo en Zonas de Reserva (A) y Zonas de distribución potencial de endemismos (B1).",
  "La circulación de vehículos a motor en Zonas de Reserva (A) y Zonas de distribución potencial de endemismos (B1).", 
  "Las caravanas con 4 o más vehículos.",
  "Salto desde el puente y salto con elástico: en Zonas de Reserva (A) y Zonas de distribución potencial de endemismos (B1).",
  "Espeleología.",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
  "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000, de 31 de enero, sobre la organización de acampadas y campamentos juveniles de Andalucía.",
  "La apertura de nuevas vías de escalada en paredes y el reequipamiento y el desequipamiento de las existentes.",
  "El establecimiento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor.",
  "La creación de campamentos de turismo.",
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


const SierraMaginaRestrictions = () => {
  return (
    <div className="container mt-4 border border-warning p-4">
      <h3 className="mb-4">Restricciones del Parque Natural de Sierra Mágina</h3>
      <Sections title="Normas Generales" items={generalRules} />
      <Sections title="Actividades no permitidas" items={forbiddenActivities} />
      <Sections title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
      <Sections title="PRUG:" items={prugActivities} />
    </div>
  );
};

export default SierraMaginaRestrictions;
