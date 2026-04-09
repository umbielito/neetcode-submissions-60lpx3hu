class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        return this.backtrack(nums, [], 0)
    }

    backtrack(nums, array, level) {
        if (level === nums.length) {
            return [array]
        };

        return [
            ...this.backtrack(nums, [...array, nums[level]], level + 1),
            ...this.backtrack(nums, [...array], level + 1)
        ]
    }
}
