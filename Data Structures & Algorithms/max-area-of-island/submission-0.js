class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0;
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                const islandSize = this.dfs(grid, i, j);
                if(islandSize > max) max = islandSize;
            }
        }
        return max;
    }
 
    dfs(grid, r, c) {
        const ROWS = grid.length;
        const COLUMNS = grid[0].length;
        const isOutOfBounds = Math.min(c, r) < 0 || r === ROWS || c === COLUMNS

        if(isOutOfBounds || grid[r][c] === 0) return  0

        grid[r][c] = 0;
        let count = 1;
        count += this.dfs(grid, r + 1, c)
        count += this.dfs(grid, r - 1, c)
        count += this.dfs(grid, r, c + 1)
        count += this.dfs(grid, r, c - 1)

        return count;
    }
}
