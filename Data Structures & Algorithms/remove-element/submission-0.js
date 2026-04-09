class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        console.log(nums, val)
        let current = 0;
        let counter = 0;
        while (current < nums.length) {
            if(nums[current] === val) {
                counter++
                for (let j = current; j < nums.length; j++) {
                    nums[j] = nums[j + 1] ?? null
                }
            } else {
                current++
            }
        }
        
        while(counter > 0) {
            nums.pop();
            counter--;
        }

        return nums.length;
    }
}
