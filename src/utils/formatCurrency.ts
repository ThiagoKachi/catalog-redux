export function formatCurrencyBRL(value: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatCurrencyFromAPI(value: string): number {
  const cleanString = value.replace('R$', '').replace(',', '.');
  const priceNumber = parseFloat(cleanString);

  return priceNumber;
}
