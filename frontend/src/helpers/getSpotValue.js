export function getSpotValue(balances, tickerData) {
  let rtn = {
    'USDT': 0.0,
    'crypto': 0.0,
  };
  for(let el of balances) {
    if (
      ['USDT', 'EUR'].includes(el.asset) ) {
      rtn[el.asset] = parseFloat(el.locked) + parseFloat(el.free)
    } else {
      const usdtPrice = tickerData[el.asset + 'USDT']
      if (usdtPrice) {
        rtn.crypto += (parseFloat(el.locked) + parseFloat(el.free)) * parseFloat(usdtPrice.price)
      }
    }
  }
  return rtn;
}
