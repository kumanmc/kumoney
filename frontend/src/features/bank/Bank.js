import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Bank({bankData}) {

  return (
    <>
      <Row id="bank-list">
        <Col sm={4}>

        <Col sm={8}>
          {coinSelected &&
            <TradingViewWidget coinSelected={coinSelected} />
          }
        </Col>
      </Row>
    </>
  );
}
