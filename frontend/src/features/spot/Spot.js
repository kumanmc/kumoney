import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CoinList} from './CoinList'
import TradingViewWidget from '../shared/TradingViewWidget';

export default function Spot({data, coinSelected, setCoinSelected, tickerData}) {

  return (
    <>
      <Row>
        <h1>SPOT</h1>
      </Row>
      <Row>
        <Col>
          <CoinList
            title="Crypto"
            balances={data.balances}
            setCoinSelected={setCoinSelected}
            tickerData={tickerData}
          />
        </Col>
        <Col>
          { coinSelected &&
            <TradingViewWidget coinSelected={coinSelected}/>
          }
        </Col>
      </Row>
    </>
  );
}
