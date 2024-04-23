// BinanceTicker.js
import { useEffect } from 'react';
import { useMyContext } from '../../context/context';
import { normalizeArray } from '../../helpers/normalizeArray'
const BinanceTicker = () => {
  const { 
    updateTickerData, 
    error,
   } = useMyContext(null);

  const fetchBinanceData = async () => {
    if (!error) {
      try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/price');
        const jsonData = await response.json();
        updateTickerData(normalizeArray(jsonData, 'symbol'));
      } catch (error) {
        console.error('Error al obtener datos de Binance:', error);
      }
        
    }

  };

  useEffect(() => {

    fetchBinanceData();

    const intervalId = setInterval(fetchBinanceData, 10000);

    return () => clearInterval(intervalId);
  }, [false]);

  return;
};

export default BinanceTicker;
