class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const result = []
        for(let i = n; i >= 0; i--) {
            let b = i;
            let count = 0;

            while (b > 0) {
                if((b & 1) === 1) {
                    count++;
                }
                b = b >> 1;
            }
            result[i] = count;
        }
        return result;
    }
}
