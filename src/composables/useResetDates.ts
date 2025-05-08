export function useResetDates() {
  const resetDate = () => {
    return new Date(); // Devuelve la fecha actual
  };

  return {
    resetDate
  };
}
