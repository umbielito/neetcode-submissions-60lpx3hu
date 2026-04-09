class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        return this.dfs(nums, target, [], 0)
    }

    dfs(nums, target, array, index) {
        if(nums.length === index) return []

        const sum = array.reduce((val, acc) => val + acc, 0)

        if(sum > target) {
            return []
        } 

        if (sum === target) {
            return [array]
        }

        return [
            ...this.dfs(nums, target, [...array, nums[index]], index),
            ...this.dfs(nums, target, [...array], index + 1)
        ]
    }
}
