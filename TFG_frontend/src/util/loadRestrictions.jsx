export const loadRestrictions = async (parks, setRestrictions) => {
    const restrictionsMap = {};
    for (const park of parks) {
      if (!park.trim()) continue;
  
      try {
        const module = await import(`../assets/restrictions/${park}_restrictions.jsx`);
        restrictionsMap[park] = module.default;
      } catch (err) {
        console.warn(`No se encontraron restricciones para: ${park}`);
        restrictionsMap[park] = () => <div>No hay restricciones disponibles.</div>;
      }
    }
    setRestrictions(restrictionsMap);
  };
  