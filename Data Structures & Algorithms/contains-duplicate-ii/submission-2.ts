class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        for (let i = 0; i < nums.length - k || i === 0; i++) {
            for (let j = i + 1; j <= i + k; j++) {
                if (nums[i] === nums[j]) return true;
            }
        } 

        return false;
    }
}
