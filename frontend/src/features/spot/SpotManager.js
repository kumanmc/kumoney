import React, { useEffect, useState } from 'react';
import Spot from './Spot';
import Loading from '../../shared/Loading';
import { useMyContext } from '../../context/context';
import { fetchData } from '../../api/api'

function SpotManager() {

  const [data, setData] = useState([]);
  const {
    coinSelected,
    setCoinSelected,
    tickerData,
  } = useMyContext();

  useEffect(() => {
    fetchData('http://localhost:8000/api/account/', setData);
  }, [false]);

  if (!data || !data.balances) {
    return (<Loading />)
  }

  return (
    <Spot
      data={data}
      coinSelected={coinSelected}
      setCoinSelected={setCoinSelected}
      tickerData={tickerData}
    />
  );
}

export { SpotManager };
