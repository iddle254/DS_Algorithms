class FindDuplicates:
    def remove_dup(self, nums: list[int])->bool:
        nums_set = set(nums)
        no_duplicates = list(nums_set)
        if len(nums) != len(no_duplicates):
            return True
        else:
            return False

nums = [1,2,3,1]
dup_hunter = FindDuplicates()
dup_hunter.remove_dup(nums)