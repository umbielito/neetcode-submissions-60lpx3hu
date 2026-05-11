class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(
        text1,
        text2,
        i = 0,
        j = 0,
        grid = Array.from({ length: text1.length + 1 }).map(() =>
            Array.from({ length: text2.length + 1 }),
        ),
    ) {
        console.log(grid[i][j]);
        if (grid[i][j] !== undefined) return grid[i][j];

        if (i === text1.length || j === text2.length) {
            grid[i][j] = 0;
            return 0;
        }

        if (text1[i] === text2[j]) {
            grid[i][j] = this.longestCommonSubsequence(text1, text2, i + 1, j + 1, grid) + 1;
        } else {
            grid[i][j] = Math.max(
                this.longestCommonSubsequence(text1, text2, i + 1, j, grid),
                this.longestCommonSubsequence(text1, text2, i, j + 1, grid),
            );
        }

        return grid[i][j];
    }
}
