export function useFormatAmount(currency = 'MXN', locale = 'es-MX') {
  const formatAmount = (amount: number) => {
    try {
      const options: Intl.NumberFormatOptions = {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      };
      return new Intl.NumberFormat(locale, options).format(amount);
    } catch (error) {
      console.error("Error al formatear la cantidad:", error);
      return '';
    }
  };

  return { formatAmount };
}
