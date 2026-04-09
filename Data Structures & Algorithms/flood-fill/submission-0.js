class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        return this.dfs(image, sr, sc, color, image[sr][sc])
    }

    dfs(image, r, c, color, painted) {
        const ROWS = image.length;
        const COLUMNS = image[0].length;
        const isOutOfBounds = Math.min(r, c) < 0 || r >= ROWS || c >= COLUMNS;

        if (isOutOfBounds || image[r][c] !== painted || image[r][c] === color) {
            return image
        }

        image[r][c] = color

        this.dfs(image, r, c + 1, color, painted)
        this.dfs(image, r, c - 1, color, painted)
        this.dfs(image, r + 1, c, color, painted)
        this.dfs(image, r - 1, c, color, painted)
        return image
    }
}
