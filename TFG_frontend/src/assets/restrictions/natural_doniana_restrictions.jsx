  const generalRules = [
    "",
    "Las actividades sometidas a autorización deberán ejercerse de manera que no conlleven repercusiones negativas sobre el medio natural, no alteren el normal funcionamiento de los equipamientos e infraestructuras u obstaculicen la realización de estas actividades por otras personas usuarias."
  ];
  
  const forbiddenActivities = [
    "El cicloturismo campo a través y en senderos de uso exclusivamente peatonal.",
    "Las rutas ecuestres en senderos de uso público exclusivamente peatonales.",
    "El paracaidismo y el vuelo con ultraligero y en general las actividades recreativas que empleen aeronaves con motor.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
    "El estacionamiento para pernoctar de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
  ];
  
  const authorizationActivities = [
    "Las actividades incluidas en el apartado 1.a) cuando se realicen por espacios donde exista limitación de acceso o de uso, conforme lo dispuesto en el apartado 2.",
    "Las actividades de filmación, rodaje, grabación sonora y fotografía que empleen el uso de drones o impliquen el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros",
    "La celebración de pruebas o eventos deportivos y las concentraciones y actividades recreativas tal como las define el Decreto 195/2007, de 26 de junio, por el que se establecen las condiciones generales para la celebración de espectáculos públicos y actividades recreativas de carácter ocasional y extraordinario con menos de diez años de antigüedad y aquellas de más de diez años de antigüedad cuando se produzcan modificaciones de las condiciones establecidas en la última autorización otorgada por el Equipo de Gestión del Espacio Natural o, en su caso, por la Dirección General competente en materia de espacios protegidos."
  ];

  const additionalRestrictions = [
    "La acampada y pernocta al aire libre, a excepción de lo dispuesto en las normas generales referidas a actividades rocieras y romerías y en materia de actividades de investigación.",
    "La circulación de vehículos de tracción animal y caballerías fuera de los caminos y zonas autorizadas a tal efecto, excepto aquellas vinculadas a las labores de gestión o conservación.",
    "La navegación aérea vinculada a actividades de uso público y turismo activo."  
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
  
  const DonianaRestrictions = () => {
    return (
      <div className="container mt-4 border border-warning p-4">
        <h3 className="mb-4">Restricciones del parque natural de Doñana</h3>
        <Sections title="Normas Generales" items={generalRules} />
        <Sections title="Actividades no permitidas" items={forbiddenActivities} />
        <Sections title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
        <Sections title="Restricciones adicionales del Parque Nacional" items={additionalRestrictions} />
        <Sections title="PRUG:" items={prugActivities} />
      </div>
    );
  };
    
  export default DonianaRestrictions;