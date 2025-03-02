const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión del Parque Natural Sierras de Grazalema.",
  "Todas aquellas actividades organizadas por empresas y no comprendidas en el Decreto 20/2002, de 29 de enero, requerirán autorización previa de la Consejería competente en materia de medio ambiente.",
  "Las Consejerías competentes en materia de medio ambiente y turismo podrán regular mediante Orden Conjunta, las obligaciones y condiciones medioambientales para la práctica de aquellas actividades que en el futuro sean declaradas como actividades de turismo activo o de ecoturismo.",
  "La práctica y el desarrollo de las actividades de uso público y educación ambiental se realizará asegurando la conservación del patrimonio natural y cultural."
];

const forbiddenActivities = [
  "La circulación campo a través o fuera de los caminos permitidos de bicicletas y vehículos a motor",
  "La circulación de vehículos a motor campo a través, en cortafuegos y fajas auxiliares, en vías forestales de extracción de madera, en cauces secos o inundados, en servidumbres del dominio público hidráulico, caminos de anchura inferior a 2 metros y en senderos, salvo en aquellos tramos de los mismos en los que el uso de vehículos a motor esté expresamente permitido por la persona titular de la Delegación Territorial de Jaén de la Consejería competente en materia de medio ambiente.",
  "El acceso de animales de compañía en la realización de actividades de uso público en Zona A",
  "El paracaidismo.",
  "Las actividades recreativas que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor, así como los globos aerostáticos en época de estío o con riesgo de incendio.",
  "Las actividades aeronáuticas sin motor en Zona A.",
  "Actividades de orientación en Zona A.",
  "La circulación de quads en actividades vinculadas al uso público."
];

const authorizationActivities = [
  "Escalada: en lugares no previstos para ello en el PRUG.",
  "Travesía, montañismo: en Zonas de reserva (A).",
  "Vivaqueo, entendiendo por tal la actividad de pasar la noche al aire libre utilizando el material específico para estos menesteres, como el saco de dormir, la funda de vivac o tiendas de campaña de pequeña envergadura.",
  "Turismo ecuestre en Zonas de reserva (A).",
  "Senderismo: en Zonas de reserva (A).",
  "La circulación de vehículos a motor en Zonas de reserva (A)",
  "Las caravanas con 4 o más vehículos.",
  "Descenso de barrancos en zona A",
  "La espeología",
  "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000, de 31 de enero, sobre la organización de acampadas y campamentos juveniles de Andalucía.",
  "El tránsito, para la realización de actividades de educación ambiental, por caminos de acceso restringido por motivos de conservación.",
  "La apertura de nuevas vías o escuelas de escalada y el reequipamiento y el desequipamiento de las existentes.",
  "Aquellas romerías o concentraciones de carácter popular que hayan iniciado su actividad durante los últimos 10 años o la vayan a iniciar en la actualidad.",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales."
];

const prugActivities = [
  "rellenar prug"
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

const SierraGrazalemaRestrictions = () => {
  return (
    <div className="container mt-4 border border-warning p-4">
      <h3 className="mb-4">Restricciones del Parque Natural de Sierra de Grazalema</h3>
      <Sections title="Normas Generales" items={generalRules} />
      <Sections title="Actividades no permitidas" items={forbiddenActivities} />
      <Sections title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
      <Sections title="PRUG:" items={prugActivities} />
    </div>
  );
};

  export default SierraGrazalemaRestrictions;