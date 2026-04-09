class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        const prefix = [];
        const postfix = [];

        for(let i = 0; i < nums.length; i++) {
          prefix[i] = (prefix[i - 1] ?? 1) * nums[i];
          postfix[(nums.length - 1) - i] = (postfix[nums.length - i] ?? 1) * nums[(nums.length - 1) - i];
        }

        for(let i = 0; i < nums.length; i++) {
            output[i] = (prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1);
        }

        return output;
    }
}
