export function formatCurrency(amount, currencyCode = 'USD') {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
  return formattedAmount;
}

export function parseCurrency(formattedAmount) {
  const value = formattedAmount.replace(/[^0-9.-]/g, '');
  return parseFloat(value);
}

export function formatCryptoCurrency(value) {
  const formattedValue = Number(value).toFixed(4);
  const result = formattedValue.replace(/(\.[0-9]*[1-9])0+$/, '$1');
  return result;
}