class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = [1] * len(nums)

        prefix = 1

        for num in range(len(nums)):
            result[num] = prefix
            prefix *= nums[num]

        postfix = 1

        for num in range(len(nums) - 1, -1, -1):
            result[num] *= postfix
            postfix *= nums[num]
        return result
