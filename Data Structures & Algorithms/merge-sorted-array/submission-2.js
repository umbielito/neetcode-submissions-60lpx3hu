class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        const nums1_stack = [];
        for(let i = 0; i < m + n; i++) {
            if (i < m) {
                console.log(nums1_stack)
                nums1_stack.push(nums1[i]);
            }
            if (nums2[0] === undefined || nums1_stack[0] <= nums2[0]) {
                nums1[i] = nums1_stack.shift();
            } else {
                nums1[i] = nums2.shift();
            }
        }

        return nums1;
    }
}
