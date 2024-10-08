import copy

class LogicService:

    # Get account from finance filtering empty balances
    def get_account(data):
        response = copy.deepcopy(data)

        response['balances'] = [
            balance for balance in data['balances']
            if float(balance["free"]) > 0.01 or float(balance['locked']) > 0.01
        ]

        return response
