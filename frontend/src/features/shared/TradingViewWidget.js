// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;
/*
  coinselected is the symbol. We use it tu load the graphic in USDT.
  For instance:
    BTC
    ETH
    LOOM
*/
export default function TradingViewWidget({coinSelected}) {

  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_29573') && 'TradingView' in window) {
          new window.TradingView.widget({
            symbol: "BINANCE:" + coinSelected + "USDT",
            interval: "D",
            // timezone: "Etc/UTC",
            "timezone": "exchange",
            "hide_side_toolbar": false,
            theme: "light",
            style: "1",
            locale: "es",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_29573",
            "width": "840",
            "height": "610",
          });
        }
      }
    },
    [coinSelected]
  );

  return (
    <div className='tradingview-widget-container' style={{ height: "100%", width: "100%" }}
      data-testid='trading-view'>
      <div id='tradingview_29573' style={{ height: "calc(100% - 32px)", width: "100%" }} />
      <div className="tradingview-widget-copyright">
        <a href="https://es.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Siga los mercados en TradingView</span></a>
      </div>
    </div>
  );
}
