class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        let current_postfix = 1;
        
        for(let i = 0; i < nums.length; i++) {
            output[i] = (output[i - 1] ?? 1) * (nums[i - 1] ?? 1)
        }

        for(let i = nums.length - 1; i >= 0; i--) {
            current_postfix *= nums[i + 1] ?? 1;
            output[i] = output[i] * current_postfix;
        }

        return output;
    }
}
