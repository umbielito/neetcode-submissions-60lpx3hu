class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];

        for(let i = 0; i < nums.length; i++) {
            let product = 1;
            for(let k = 0; k < nums.length; k++) {
                if(k !== i) product *= nums[k];
            }
            output.push(product);
        }

        return output;
    }
}
