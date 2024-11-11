export const formatDateToPocketBase = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// Función para formatear la fecha en el formato "11 dic 24 a las 13:00 hrs"
export const formatearFechayHora = (fechaString: string): string => {
  const opciones: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const fecha = new Date(fechaString);
  const fechaFormateada = new Intl.DateTimeFormat("es-ES", opciones).format(
    fecha
  );
  const [diaMesAno, horaMinuto] = fechaFormateada.split(", ");

  return `${diaMesAno} a las ${horaMinuto} hrs`;
};
