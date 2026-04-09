class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        if(grid.length && grid[0][0] === 1) {
            return -1;
        }
        const ROWS = grid.length;
        const COLUMNS = grid[0].length;
        const queue = []
        const visited = []
        queue.push([0, 0])
        visited.push([0, 0])
        let length = 1;
        while (queue.length) {
            const queueLengthSnapshot = queue.length
            for (let i = 0; i < queueLengthSnapshot; i++) {
                const [r, c] = queue.shift()
                console.log(`Atual [${r}, ${c}] = ${grid[r][c]}`)
                if(r === ROWS - 1 && c === COLUMNS - 1 && grid[r][c] === 0) {
                    return length;
                }
                const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0], [-1, -1], [-1, 1], [1, -1], [1, 1]];
                for(const [nr, nc] of neighbors) {
                    const row = r + nr
                    const column = c + nc
                    const isOutOfBounds = Math.min(row, column) < 0 || row === ROWS || column === COLUMNS;
                    const inVisited = !!visited.find(coord => coord[0] === row && coord[1] === column)
                    if(isOutOfBounds || inVisited || grid[row][column] === 1) {
                        continue
                    }
                    console.log(`Adicionado [${row}, ${column}] = ${grid[r][c]}`)
                    queue.push([row, column])
                    visited.push([row, column])
                }
            }
            length += 1
            console.log(`Tamanho do percurso: ${length}`)
        }
        return -1;
    }
}
