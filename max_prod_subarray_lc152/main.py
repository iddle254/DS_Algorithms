class Solution:
    def maxProduct(self, nums: list[int]) -> int:
        max_prod, min_prod, ans = nums[0], nums[0], nums[0]

        for i in range(1, len(nums)):
            tmp = max_prod
            max_prod = max(max_prod * nums[i], min_prod * nums[i], nums[i])
            min_prod = min(tmp * nums[i], min_prod * nums[i], nums[i])
            ans = max(ans, max_prod)
        return ans

inputs = [2,3,-2,4]
sol = Solution()
sol.maxProduct(inputs)