class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islandCount = 0;
        for(let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if(this.dfs(grid, i, j) === true) {
                    islandCount++
                }
            }
        }
        return islandCount;
    } 


    dfs(grid, r, c) {
        const ROWS = grid.length;
        const COLUMNS = grid[0].length;

        const isOutOfBounds = Math.min(r, c) < 0 || r === ROWS || c === COLUMNS

        if (isOutOfBounds || grid[r][c] === '0') {
            return false;
        }

        grid[r][c] = '0'

        this.dfs(grid, r, c + 1)
        this.dfs(grid, r, c - 1)
        this.dfs(grid, r + 1, c)
        this.dfs(grid, r - 1, c)

        return true;
    }
}
