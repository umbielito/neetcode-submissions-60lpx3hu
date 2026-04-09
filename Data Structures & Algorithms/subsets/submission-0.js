class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const output = []
        this.backtrack(nums, [], 0, output)
        return output
    }

    backtrack(nums, array, level, output) {
        if (level === nums.length) {
            output.push(array)
        } else {
            this.backtrack(nums, [...array, nums[level]], level + 1, output),
            this.backtrack(nums, [...array], level + 1, output)
        }
        
        // if (level === nums.length) {
        //     console.log('formed array', array)
        //     return array
        // };

        // return [
        //     this.backtrack(nums, [...array, nums[level]], level + 1),
        //     this.backtrack(nums, [...array], level + 1)
        // ]
    }
}
