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
        // console.log(array)
        const sum = array.reduce((el, acc) => el + acc, 0)
        console.log(`${array} = ${sum}`)
        if (sum > target) {
            return []
        } else if (sum === target) {
            return [array]
        } else {
            let result = []
            for (let i = index; i < nums.length; i++) {
                result.push(...this.dfs(nums, target, [...array, nums[i]], i))
            }
            return result
        }
        
    }
}
