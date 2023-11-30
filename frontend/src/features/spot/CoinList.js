import React from 'react';
import { formatCurrency, formatCryptoCurrency } from '../../helpers/currencyFormatter'
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { getSpotValue } from '../../helpers/getSpotValue'

export function CoinList({ title, balances, setCoinSelected, tickerData }) {

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
          <ListGroup id="crypto-list">
            <ListGroup.Item
              className="coin-item"
              variant="info"
            >
              <Row>
                <Col sm={3}>Crypto</Col>
                <Col sm={3}>Price</Col>
                <Col sm={3}>Amount</Col>
                <Col sm={3}>Total</Col>
              </Row>
            </ListGroup.Item>
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
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function Coin({ item, tickerData, setCoinSelected }) {
  if (!tickerData[item.asset + 'USDT']) {
    return null;
  }
  const usdPrice = tickerData[item.asset + 'USDT'];

  return (

    <ListGroup.Item
      className="coin-item"
      onClick={() => setCoinSelected(item.asset)}
      action variant="info"
    >
      <Row>
        <Col sm={3}>{item.asset}</Col>
        <Col sm={3}>{formatCryptoCurrency(usdPrice.price)}</Col>
        <Col sm={3}><Amount item={item} /></Col>
        <Col sm={3}>
          {
            formatCurrency(
              (
                parseFloat(item.locked) + parseFloat(item.free)
              ) * parseFloat(usdPrice.price)
            )
          }
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

function Amount({ item }) {
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
      <Row>
        {
          (
            parseFloat(item.locked) + parseFloat(item.free)
          ).toFixed(2)
        }
      </Row>
    </OverlayTrigger>
  );
}