import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import Container from 'react-bootstrap/Container';
import Spot from './Spot'

// jest.mock('../shared/TradingViewWidget');

jest.mock('../shared/TradingViewWidget', () => {
  return jest.fn(({ coinSelected }) => (
    <div data-testid="trading-view">
      {coinSelected}
    </div>
  ));
});

test('Spot with 3 values and no coin selected', () => {

  const data = {
    balances: [
      {asset: 'ADA', free: '2.17000', locked: '3.40500'},
      {asset: 'BTC', free: '10.07817000', locked: '5.00000000'},
      {asset: 'ETH', free: '70.07817000', locked: '89.00440000'},
      {asset: 'UNKNOWN', free: '70.07817000', locked: '89.00440000'},
      {asset: 'USDT', free: '2000.07817000', locked: '100.00'},
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

test('Spot with 3 values and coin selected to see trading view', async () => {

  const data = {
    balances: [
      {asset: 'ADA', free: '2.17000', locked: '3.40500'},
      {asset: 'BTC', free: '10.07817000', locked: '5.00000000'},
      {asset: 'ETH', free: '70.07817000', locked: '89.00440000'},
      {asset: 'UNKNOWN', free: '70.07817000', locked: '89.00440000'},
      {asset: 'USDT', free: '2000.07817000', locked: '100.00'},
    ]
  }
  const coinSelected = 'BTC'
  const setCoinSelected = () => console.log('setCoinSelected clicked!')
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

  const spyConsole = jest.spyOn(console, 'log');
  fireEvent.click(itemsRow[0])
  expect(spyConsole).toHaveBeenCalledWith('setCoinSelected clicked!');
  spyConsole.mockRestore();

  //Check tradingview is rendered
  await waitFor(() => {
    const tradingViewWidget = screen.queryByTestId('trading-view');
    within(tradingViewWidget).getByText('BTC')
  });



});
