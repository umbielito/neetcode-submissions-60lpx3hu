class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans = 0;

        for(let l = 0; l < heights.length - 1; l++) {
            let r = l + 1;     

            while(r <= heights.length - 1) {
                const area = Math.min(heights[l], heights[r]) * (r - l)
                if(area > ans) ans = area;
                r++;
            }

        }

        return ans;
    }
}
