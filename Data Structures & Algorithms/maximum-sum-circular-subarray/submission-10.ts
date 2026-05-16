class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums: number[]): number {
       let curMin = 0;
       let globalMin = nums[0];
       let curMax = 0;
       let globalMax = nums[0];
       let total = 0;

       for (let n of nums) {
            // -1 ou -1 + -5 ~> -6
            curMin = Math.min(n, n + curMin);
            // -6
            globalMin = Math.min(curMin, globalMin);
            // -1
            curMax = Math.max(n, n + curMax)
            // -1
            globalMax = Math.max(curMax, globalMax)
            // -2 + -3 ~> -6
            total += n;
       }

       return total === globalMin ? globalMax : Math.max(globalMax, total - globalMin);
    }
}
