class Buy_Sell():
    def max_profit(self, prices: list[int])->int:
        l, r = 0, 1;
        max_profit = 0

        while r < len(prices):
            if prices[l] < prices[r]:
                max_profit = max(max_profit, prices[r]-prices[l])
            else:
                l = r
            r+=1
        return max_profit

# class Buy_Sell():
#     def max_profit(self, prices: list[int])->int:
#         max_profit = 0
#         max_r, min_l = prices[1], prices[0]
#         for price in prices:
#             max_r = max(max_r, price)
#             print(f"max r >>{max_r}")
#             min_l = min(min_l, price)
#             print(f"min l >>{min_l}")
#         if prices.index(max_r) < prices.index(min_l):
#             prices.index(max_r) = new_r(prices.index(min_l), len(prices)-1)
#         else:
#             self.max_profit = max(max_profit, max_r - min_l)
#
#     def new_r(self, curr_left, arr_length):
#         return max(range(curr_left + 1, arr_length))

prices = [7,1,5,3,6,4]
buy_sell = Buy_Sell()
profit = buy_sell.max_profit(prices)
print(f"{profit}")
