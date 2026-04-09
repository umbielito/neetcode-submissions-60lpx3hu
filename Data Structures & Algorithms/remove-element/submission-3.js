class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let current = 0;
        while (current < nums.length) {
            if(nums[current] === val) {
                for (let j = current; j < nums.length; j++) {
                    nums[j] = nums[j + 1]
                }
                nums.pop();
            } else {
                current++
            }
        }

        return nums.length;
    }
}
