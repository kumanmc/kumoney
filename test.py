from binance.spot import Spot

client = Spot()
print(client.time())

client = Spot(key='G72Mxq2QCwjj0tknI2WOAqJgIBvCtx80N8HfTh86VkSQtwlTdf6eDUPBcADyVsB2', secret='nNclXKoBWArbt9bAd4GXMU9SOcUYD8kBwNADz7USpUgifWtRgPFdMkQkzNz8uVFD')

# Get account information
print(client.account())

# Post a new order
# params = {
#     'symbol': 'BTCUSDT',
#     'side': 'SELL',
#     'type': 'LIMIT',
#     'timeInForce': 'GTC',
#     'quantity': 0.002,
#     'price': 9500
# }

# response = client.new_order(**params)
# print(response)