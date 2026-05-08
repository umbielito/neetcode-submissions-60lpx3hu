class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const lastRowIndex = grid.length - 1;
        const lastColIndex = grid[0].length - 1;
        
        for(let r = lastRowIndex; r >= 0; r--) {
            for (let c = lastColIndex; c >= 0; c--) {
                if (r === lastRowIndex && c === lastColIndex && grid[r][c] !== 1) {
                    grid[r][c] = 1;
                } else {
                    if(grid[r][c] === 1) {
                        grid[r][c] = 0;
                    } else {
                        const bottom = grid[r + 1] ? (grid[r + 1][c] ?? 0) : 0;
                        const right = grid[r][c + 1] ?? 0;
                        grid[r][c] = right + bottom;
                    }
                }
            }

        }

        return grid[0][0] ?? 0;
    }
}
