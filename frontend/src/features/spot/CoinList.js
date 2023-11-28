import React from 'react';
import { formatCurrency, formatCryptoCurrency } from '../../helpers/currencyFormatter'
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack'
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { getSpotValue } from '../../helpers/getSpotValue'

export function CoinList({title, balances, setCoinSelected, tickerData}) {

  const spotValue = getSpotValue(balances, tickerData);

  return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Stack direction="horizontal" gap={2}>
              <div className="p-2"><h3>{title}</h3></div>
              <div className="p-2">Crypto:  {formatCurrency(spotValue.crypto)}</div>
              <div className="p-2">USDT: {formatCurrency(spotValue.USDT)}</div>
            </Stack>
          </Accordion.Header>
          <Accordion.Body>
            <Table className={"coin-list"}>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Total</th>
              </tr>
            </thead>
              <tbody>
              {
                balances.sort((a, b) => a.asset.localeCompare(b.asset))
                .map((item, index) => (
                  <Coin 
                    key={index}
                    item={item}
                    tickerData={tickerData}
                    setCoinSelected={setCoinSelected}
                  />
                ))
              }
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
}

function Coin ({item, tickerData, setCoinSelected}) {
  if (!tickerData[item.asset + 'USDT']) {
    return null;
  }
  const usdPrice = tickerData[item.asset + 'USDT'];

  return (
    <tr
      className="coin-item"
      direction="horizontal" 
      gap={5} 
      onClick={() => setCoinSelected(item.asset)}
      >
        <td>{item.asset}</td>
        <td>{formatCryptoCurrency(usdPrice.price)}</td>
        <Amount item={item} />
        <td>{
        formatCurrency(
          (
            parseFloat(item.locked) + parseFloat(item.free)
          ) * parseFloat(usdPrice.price)
          )
          }
        </td>
    </tr>
  );
}

function Amount({item}) {
  return (
    <OverlayTrigger
      key={'top'}
      placement={'top'}
      overlay={
      <Tooltip id={'amount-fre-lock'}  >
        <p className={'text-start'}>Free: {parseFloat(item.free)}</p>
        <p className={'text-start'}>Locked: {parseFloat(item.locked)}</p>
      </Tooltip>
    }>
      <td>
        {
          (
            parseFloat(item.locked) + parseFloat(item.free)
          ).toFixed(2)
        }
      </td>
    </OverlayTrigger>
  );
}