class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const queue = []
        let freshFruitCounter = 0;
        // Encontrar as laranjas podres
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j])
                } else if (grid[i][j] === 1) {
                    freshFruitCounter++
                }
            }
        }

        if (freshFruitCounter === 0) {
            return 0;
        }

        if (queue.length === 0) {
            return -1
        }

        let minute = 0;
     
        while (queue.length) {
            let hasHealthyFruit = false;
            // Se não houver nenhuma fruta saudável, retornar o minuto atual
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[0].length; j++) {
                    if (grid[i][j] === 1) {
                        hasHealthyFruit = true;
                    }
                }
            }
            if(!hasHealthyFruit) {
                return minute;
            }
            const lengthSnapshot = queue.length;
            for(let z = 0; z < lengthSnapshot; z++) {
                const [r, c] = queue.shift()
         
                const neighbors = [[-1, 0], [1, 0], [0, -1], [0, 1]];
                for (let [x, y] of neighbors) {
                    let row = r + x;
                    let col = c + y;
                    let isOutOfBounds = Math.min(row, col) < 0 || row === grid.length || col === grid[0].length;
                    if(isOutOfBounds || grid[row][col] === 2 || grid[row][col] === 0) {
                        continue;
                    }
                    queue.push([row, col])
                    grid[row][col] = 2;
                }
            }
            minute += 1;
        }

        return -1;
    }
}
