
export const parkNameMap = {
  "bahia cadiz": "Parque Natural Bahía de Cádiz",
  "cabo de gata nijar": "Parque Natural Cabo de Gata-Níjar",
  "del estrecho": "Parque Natural del Estrecho",
  "despeniaperros": "Parque Natural Despeñaperros",
  "los alcornocales": "Parque Natural Los Alcornocales",
  "montes malaga": "Parque Natural Montes de Málaga",
  "natural doniana": "Parque Nacional de Doñana",
  "sierra andujar": "Parque Natural Sierra de Andújar",
  "sierra aracena": "Parque Natural Sierra de Aracena y Picos de Aroche",
  "sierra baza": "Parque Natural Sierra de Baza",
  "sierra cardenia montoro": "Parque Natural Sierra de Cardeña y Montoro",
  "sierra castril": "Parque Natural Sierra de Castril",
  "sierra cazorla": "Parque Natural Sierras de Cazorla, Segura y Las Villas",
  "sierra grazalema": "Parque Natural Sierra de Grazalema",
  "sierra hornachuelos": "Parque Natural Sierra de Hornachuelos",
  "sierra huetor": "Parque Natural Sierra de Huétor",
  "sierra magina": "Parque Natural Sierra Mágina",
  "sierra maria los velez": "Parque Natural Sierra María-Los Vélez",
  "sierra nevada": "Parque Nacional y Natural de Sierra Nevada",
  "sierra nieves": "Parque Nacional Sierra de las Nieves",
  "sierra norte sevilla": "Parque Natural Sierra Norte de Sevilla",
  "sierra tejeda": "Parque Natural Sierras de Tejeda, Almijara y Alhama",
  "sierras subbeticas": "Parque Natural Sierras Subbéticas"
};

export function formatParkName(rawName) {
  const clean = rawName?.toLowerCase().replace(/"/g, "").trim();
  return parkNameMap[clean] || `Parque Natural ${clean.replace(/\b\w/g, l => l.toUpperCase())}`;
}
