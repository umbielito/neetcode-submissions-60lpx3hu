class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans = 0;

        let l = 0, r = heights.length - 1;

        while(l < r) {
            const area = Math.min(heights[l], heights[r]) * (r - l);
            if(area > ans) ans = area;
            heights[l] > heights[r] ? r-- : l++;
        }

        return ans;
    }
}
