class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let prevRow = Array.from({ length: n }).map(() => 0)

        for (let r = m - 1; r >= 0; r--) {
            const currRow = Array.from({ length: n }).map(() => 0)
            currRow[n - 1] = 1;
            for (let c = n - 2; c >= 0; c--) {
                currRow[c] = prevRow[c] + (currRow[c + 1] ?? 0)
            }
            prevRow = currRow;
        }

        return prevRow[0]
    }
}
