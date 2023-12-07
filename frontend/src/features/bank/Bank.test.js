import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import Container from 'react-bootstrap/Container';
import Bank from './Bank'

// jest.mock('../shared/TradingViewWidget');
// jest.mock('../shared/TradingViewWidget', () => {
//   return jest.fn(({ coinSelected }) => (
//     <div data-testid="trading-view">
//       {coinSelected}
//     </div>
//   ));
// });

const bankData = {
  bank: [
    { symbol: 'ADA', goal: '2.17000', current: '3.40500' },
    { symbol: 'BTC', goal: '3', current: '5.00000000' },
    { symbol: 'ETH', goal: '70.07817000', current: '89.00440000' },
    { symbol: 'UNKNOWN', goal: '70.07817000', current: '89.00440000' },
    { symbol: 'USDT', goal: '2000.07817000', current: '100.00' },
  ]
}

const tickerData = {
  'ADAUSDT': { symbol: 'ADA', price: '2.17000' },
  'BTCUSDT': { symbol: 'BTC', price: '37000.17000' },
  'ETHUSDT': { symbol: 'ETH', price: '2050.87000' },
  'OTHER1USDT': { symbol: 'OTHER1', price: '2.18900' },
  'OTHER2USDT': { symbol: 'OTHER2', price: '7.7000' },
}

test('Bank show goals and current status', () => {

  render(
    <Container>
      <Bank
        bankData={bankData}
        tickerData={tickerData}
      />
    </Container>
  );
  const bankList = document.getElementById('bank-list');
  expect(bankList).toBeInTheDocument();

  const itemsRow = coinList.querySelectorAll('button.bank-item');
  expect(itemsRow.length).toBe(5);

  expect(itemsRow[0]).toHaveTextContent('ADA');
  expect(itemsRow[0]).toHaveTextContent('$12.10');
  expect(itemsRow[1]).toHaveTextContent('BTC');
  expect(itemsRow[1]).toHaveTextContent('$557,894.85');
  expect(itemsRow[2]).toHaveTextContent('ETH');
  expect(itemsRow[2]).toHaveTextContent('$326,257.67');


});
