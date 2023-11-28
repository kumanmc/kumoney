import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from 'react-bootstrap/Container';
import Spot from './Spot'

test('renders Spot with 3 values and no coin selected', () => {

  const data = {
    balances: [
      {asset: 'ADA', free: '2.17000', locked: '3.40500'},
      {asset: 'BTC', free: '10.07817000', locked: '5.00000000'},
      {asset: 'ETH', free: '70.07817000', locked: '89.00440000'},
    ]
  }
  const coinSelected = null
  const setCoinSelected = () => console.log('Mock me!')
  const tickerData = {
    'ADAUSDT': {symbol: 'ADA', price: '2.17000'},
    'BTCUSDT': {symbol: 'BTC', price: '37000.17000'},
    'ETHUSDT': {symbol: 'ETH', price: '2050.87000'},
    'OTHER1USDT': {symbol: 'OTHER1', price: '2.18900'},
    'OTHER2USDT': {symbol: 'OTHER2', price: '7.7000'},
  }
  render(
      <Container>
        <Spot 
          data={data} 
          coinSelected={coinSelected} 
          setCoinSelected={setCoinSelected}  
          tickerData={tickerData} 
        />
    </Container>
  );
  const coinList = screen.getByRole('table');
  expect(coinList).toBeInTheDocument();

  const itemsRow = coinList.querySelectorAll('tr.coin-item');
  expect(itemsRow.length).toBe(3);

  expect(itemsRow[0]).toHaveTextContent('ADA');
  expect(itemsRow[0]).toHaveTextContent('$12.10');
  expect(itemsRow[1]).toHaveTextContent('BTC');
  expect(itemsRow[1]).toHaveTextContent('$557,894.85');
  expect(itemsRow[2]).toHaveTextContent('ETH');
  expect(itemsRow[2]).toHaveTextContent('$326,257.67');

});
