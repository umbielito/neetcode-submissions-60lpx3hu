class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const output = [];
        const s = nums.sort((a, b) => a - b);
        for(let a = 0; a <= nums.length - 3; a++) {
            if(a > 0 && s[a - 1] === s[a]) {
                continue;
            }
            let b = a + 1, c = nums.length - 1, t = s[a] * -1;
            while(b < c) {
                if(b - a > 1 && s[b - 1] === s[b]) {
                    b++;
                    continue;
                }

                  if(c !== s.length && s[c + 1] === s[c]) {
                    c--;
                    continue;
                }

                if(s[b] + s[c] > t) {
                    c--;
                } else if (s[b] + s[c] < t) {
                    b++;
                } else {
                    output.push([s[a], s[b], s[c]]);
                    b++;
                }
            }
        }
        return output;
    }
}
