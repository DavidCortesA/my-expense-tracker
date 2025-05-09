export function useFormatData() {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat('es-MX', options).format(date);
    } catch (error) {
      console.error("Error al formatear la fecha:", error);
      return '';
    }
  };

  return { formatDate };
}
