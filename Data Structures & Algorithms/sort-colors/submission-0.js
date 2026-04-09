class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const count = [0, 0, 0];

        for (let i = 0; i < nums.length; i++) {
            count[nums[i]] += 1;
        }

        let numsIndex = 0;
        
        for (let i = 0; i < count.length; i++) {
            for (let j = 0; j < count[i]; j++) {
                nums[numsIndex] = i;
                numsIndex++;
            }
        }
       }
}
