class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}
        for(let i = 0; i < nums.length; i++) {
            if(map[target - nums[i]] === undefined) {
                map[nums[i]] = i;
            } else {
                return [map[target - nums[i]], i]
            }
        }
    }
}
