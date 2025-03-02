const generalRules = [
  "La persona titular de la Consejería competente en materia de medio ambiente podrá mediante Orden:",
  "En relación con las actividades relacionadas en apartados anteriores, modificar el régimen de intervención y las limitaciones establecidas.",
  "En relación con el desarrollo de cualquier otra actividad distinta de las relacionadas en los apartados anteriores, previa valoración de la incidencia del desarrollo de la actividad en la conservación de los valores naturales que motivaron la declaración del Parque Natural, determinar, si procede, el régimen de intervención administrativa al que la actividad queda sujeta o limitar su desarrollo.",
  "La persona titular de la Delegación Territorial de la Consejería competente en materia de medio ambiente podrá, mediante Resolución, limitar o restringir, a los visitantes en general o a cierto tipo de transporte, de forma eventual o permanentemente, el acceso por cualquier camino público cuando exista causa justificada por impacto ambiental, incompatibilidad del uso con la conservación, con los trabajos forestales o de aprovechamiento de los recursos y por motivos de riesgo a las personas.",
  "No obstante lo establecido en este apartado, excepcionalmente la Consejería competente en materia de medio ambiente, mediante Resolución de la persona titular de la Delegación Territorial de Cádiz de la Consejería competente en materia de medio ambiente, podrá autorizar eventos deportivos, turísticos o culturales relacionados con las actividades citadas en dicho apartado."
];

const forbiddenActivities = [
  "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de motos de trial/enduro, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados.",
  "Las motos de agua, excepto en tareas de apoyo a actividades náuticas sin motor.",
  "La acampada y la pernocta (aparcar entre el ocaso y la salida del sol) de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
  "La realización de cualquier actividad de uso público, turismo activo o ecoturismo en Zona A1, salvo actividades vinculadas a la observación de la fauna y la flora, el patrimonio geológico y la observación geoatmosférica.",
  "La realización de cualquier actividad de uso público, turismo activo o ecoturismo en Zona A2 fuera de los equipamientos que se habiliten para ello.",
  "La navegación recreativa a motor en Zona B1.",
  "La navegación recreativa a motor en Zona B2 salvo la asociada a la pesca recreativa y a rutas turísticas de carácter educativo-divulgativo excepcionalmente autorizadas por la Administración competente en materia de medio ambiente y que discurran por las zonas señalizadas."
];

const authorizationActivities = [
  "La observación de la fauna y la flora, del patrimonio geológico y la observación geoatmosférica, cuando su práctica implique el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros, así como la instalación de estructuras de camuflaje, permanentes o no desmontables, para la observación de aves y, en cualquier caso, cuando se desarrolle en Zona A1.",
  "Las actividades de filmación, rodaje, grabación sonora y fotografía, cuando su práctica implique el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros, así como la instalación de estructuras de camuflaje permanentes o no desmontables.",
  "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de vehículos a motor por caminos de acceso restringido.",
  "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación en grupo de 4 ó más vehículos a motor.",
  "El uso de las salinas y las instalaciones de acuicultura con fines recreativos, didácticos o turísticos, cuando no esté sometido al procedimiento de prevención ambiental.",
  "La celebración de romerías y fiestas populares con menos de diez años de antigüedad y aquellas de más de diez años de antigüedad cuando se produzcan modificaciones de las condiciones establecidas en la última autorización otorgada.",
  "La celebración de pruebas o eventos deportivos y las concentraciones y actividades recreativas, tal como las define el Decreto 195/2007, de 26 de junio, por el que se establecen las condiciones generales para la celebración de espectáculos públicos y actividades recreativas de carácter ocasional y extraordinario."
];

const prugActivities = [
  "Son libres las actividades de turismo activo y ecoturismo en espacios de uso público sin restricciones específicas."
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


const DelEstrechoRestrictions = () => {
  return (
    <div className="container mt-4 border border-warning p-4">
      <h3 className="mb-4">Restricciones del parque natural del Estrecho</h3>
      <Sections title="Normas Generales" items={generalRules} />
      <Sections title="Actividades no permitidas" items={forbiddenActivities} />
      <Sections title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
      <Sections title="PRUG:" items={prugActivities} />
    </div>
  );
};

export default DelEstrechoRestrictions;