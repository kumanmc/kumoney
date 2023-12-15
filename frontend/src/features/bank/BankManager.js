import React, { useEffect, useState } from 'react';
import Bank from './Bank';
import Loading from '../shared/Loading';
import { useMyContext } from '../../context/context';
import { fetchData } from '../../api/api'

function BankManager() {

  const [dataBank, setDataBank] = useState([]);
  const {
    coinSelected,
    setCoinSelected,
    tickerData,
  } = useMyContext();

  useEffect(() => {
    fetchData('http://localhost:8000/api/bank/', setDataBank);
  }, [false]);

  if (!dataBank || !dataBank.length) {
    return (<Loading />)
  }

  return (
    <Bank
      dataBank={dataBank}
      coinSelected={coinSelected}
      setCoinSelected={setCoinSelected}
      tickerData={tickerData}
    />
  );
}

export { BankManager };
