class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1;
        
        while (left <= right) {

            const middleIndex = Math.floor((left + right) /2);

            const comparer = nums[middleIndex]

            if(target > comparer) {
                left = middleIndex + 1
            } else if (target < comparer) {
                right = middleIndex - 1
            } else {
                return middleIndex
            }

        }

        return -1
    }
}
