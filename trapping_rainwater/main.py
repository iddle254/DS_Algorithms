class Solution:
    def trap(self, height):
        pointer = 0
        pointer_left = pointer
        pointer_right = pointer
        max_pointer_left = 0
        max_pointer_right = 0

        for h in height:
            while pointer_left >= 0:
                max_pointer_left = max(max_pointer_left, height[pointer_left])
                pointer_left -= 1

            while pointer_right <
