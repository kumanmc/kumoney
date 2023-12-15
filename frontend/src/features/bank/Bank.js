import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { formatCryptoCurrency } from '../../helpers/currencyFormatter'

export default function Bank({dataBank, setCoinSelected, coinSelected, tickerData}) {

  return (
    <>
      <Row id="bank-list">
        <Col sm={4}>
        <ListGroup id="crypto-list">
            <ListGroup.Item
              className="bank-item"
              variant="info"
            >
              <Row>
                <Col sm={3}>Crypto</Col>
                <Col sm={3}>Goal</Col>
                <Col sm={3}>Current</Col>
                <Col sm={3}>Value</Col>
              </Row>
            </ListGroup.Item>
            {
              Object.keys(dataBank).sort((a, b) => dataBank[a].symbol.localeCompare(tickerData[b].asset))
                .map((item, index) => (
                  <Coin
                    key={index}
                    item={dataBank[item]}
                    tickerData={tickerData}
                    setCoinSelected={setCoinSelected}
                  />
                ))
            }
          </ListGroup>
        </Col>
        <Col sm={8}>
           Graphic for {coinSelected}
        </Col>
      </Row>
    </>
  );
}

function Coin({ item, tickerData, setCoinSelected }) {
  if (!tickerData[item.symbol + 'USDT']) {
    return null;
  }
  const usdPrice = tickerData[item.asset + 'USDT'];

  return (

    <ListGroup.Item
      className="coin-item"
      onClick={() => setCoinSelected(item.symbol)}
      action variant="info"
    >
      <Row>
        <Col sm={3}>{item.symbol}</Col>
        <Col sm={3}>{item.goal}</Col>
        <Col sm={3}>{item.current}</Col>
        <Col sm={3}>
        {formatCryptoCurrency(usdPrice.price * item.current)}
        </Col>
      </Row>
    </ListGroup.Item>
  );
}