import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CoinList } from './CoinList'
import TradingViewWidget from '../../shared/TradingViewWidget';

export default function Spot({ data, coinSelected, setCoinSelected, tickerData }) {

  return (
    <>
      <Row>
        <Col sm={4}>
          <CoinList
            title="Crypto"
            balances={data.balances}
            setCoinSelected={setCoinSelected}
            tickerData={tickerData}
          />
        </Col>
        <Col sm={8}>
          {coinSelected &&
            <TradingViewWidget coinSelected={coinSelected} />
          }
        </Col>
      </Row>
    </>
  );
}
