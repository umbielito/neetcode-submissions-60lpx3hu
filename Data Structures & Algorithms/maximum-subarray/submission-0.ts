class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let max = nums[0]
        let cur = 0;

        for (let n of nums) {
            cur = Math.max(cur, 0);
            cur += n;
            max = Math.max(cur, max)
        }

        return max;
    }
}
