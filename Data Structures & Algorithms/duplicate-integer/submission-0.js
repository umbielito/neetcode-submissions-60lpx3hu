class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;
        const numbers = []

        for(let i = 0; i < nums.length; i++) {
            if(numbers.includes(nums[i])) {
                result = true;
                break;
            } else {
                numbers.push(nums[i])
            }
        }

        return result;
    }
}
