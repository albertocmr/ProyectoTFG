const generalRules = [
  "Excepcionalmente la Consejería competente en materia de medio ambiente, mediante Resolución de la persona titular de la Delegación Territorial de Huelva de la Consejería competente en materia de medio ambiente, podrá autorizar eventos deportivos, turísticos o culturales relacionados con las actividades citadas en dicho apartado.",
  "La persona titular de la Consejería competente en materia de medio ambiente podrá, mediante Orden: a) En relación con las actividades relacionadas en apartados anteriores, modificar el régimen de intervención y las limitaciones establecidos para el desarrollo de las mismas. b) En relación con el desarrollo de cualquier otra actividad distinta a las relacionadas en los apartados anteriores, previa valoración de la incidencia del desarrollo de la actividad en la conservación de los valores naturales que motivaron la declaración del Parque Natural, determinar, si procede, el régimen de intervención administrativa al que la actividad queda sujeta.",
  "La persona titular de la Delegación Territorial de Huelva de la Consejería competente en materia de medio ambiente podrá, mediante Resolución, limitar el acceso y uso de los equipamientos básicos o el acceso a cualquier camino, establecer cupos o limitas fechar y horarios para el desarrollo de cualquier actividad, por alguna de las siguientes causas: a) Cuando la presión de la demanda sobrepase la capacidad de acogida de los equipamientos o comprometa la calidad y seguridad de la visita. b) Por fenómenos naturales imprevistos o para evitar los riesgos de incendio durante los períodos de sequía. c) Por cualquier otra circunstancia que pudiera poner en peligro hábitats o recursos objeto de la política de conservación del espacio natural protegido o de las especies de la flora y la fauna silvestres, o inferir riesgos para las personas visitantes. d) Por obras de reforma o trabajos de mantenimiento de equipamientos de uso público, siempre que estos sean de su titularidad."
];

const forbiddenActivities = [
  "El acceso a las islas de los embalses de Aracena y Zufre.",
  "El descenso de barrancos en bote y el barranquismo en Zona A.",
  "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de motos de trial/enduro, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados.",
  "La acampada o la pernocta (pasar la noche o dormir en el vehículo entre el ocaso y la salida del sol) de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
];

const authorizationActivities = [
  "La observación de la fauna y la flora, del patrimonio geológico y la observación geoatmosférica cuando su práctica implique el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros, así como la instalación de estructuras de camuflaje, permanentes o no desmontables, para la observación de aves.",
  "Las actividades de filmación, rodaje, grabación sonora y fotografía cuando su práctica implique el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros, así como la instalación de estructuras de camuflaje permanentes o no desmontables.",
  "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de vehículos a motor por caminos de acceso restringido.",
  "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación en grupo de 4 ó más vehículos a motor.",
  "La escalada clásica y deportiva en escuelas de escalada fuera de los lugares y fechas que se indican a continuación, en los cuales es de libre realización: 1º Lugares de libre realización: Cerro San Cristobal y Risco de Levante. 2º Fechas: Entre el 15 de octubre y el 28 de febrero. Estas fechas podrán modularse en función de las circunstancias previstas en el apartado 6 mediante Resolución de la persona titular de la Delegación Territorial de Huelva de la Consejería competente en materia de medio ambiente.",
  "La apertura, reequipamiento o desequipamiento de vías de escalada.",
  "La espeleología.",
  "Las acampadas y campamentos para la realización de actividades de educación ambiental, que solo podrán realizarse en las zonas y condiciones que se establezcan mediante resolución de la persona titular de la Delegación Territorial de Huelva de la Consejería competente en materia de medio ambiente.",
  "El vivaqueo y la acampada nocturna vinculados a actividades de educación ambiental para grupos superiores a 15 personas o que utilicen más de 3 tiendas de campaña.",
  "La celebración de romerías y fiestas populares con menos de diez años de antigüedad y aquellas de más de diez años de antigüedad cuando se produzcan modificaciones de las condiciones establecidas en la última autorización otorgada.",
  "La celebración de pruebas o eventos deportivos y las concentraciones y actividades recreativas, tal como las define el Decreto 195/2007, de 26 de junio, por el que se establecen las condiciones generales para la celebración de espectáculos públicos y actividades recreativas de carácter ocasional y extraordinario."
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


const SierraAracenaRestrictions = () => {  
    return (
      <div className="container mt-4 border border-warning p-4">
        <h3 className="mb-4">Restricciones del parque natural de Sierra de Aracena y Picos de Aroche</h3>
        <Sections title="Normas Generales" items={generalRules} />
        <Sections title="Actividades no permitidas" items={forbiddenActivities} />
        <Sections title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
        <Sections title="PRUG:" items={prugActivities} />
      </div>
    );
  };
    
  export default SierraAracenaRestrictions;