class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = [...board];
        const columns = [];
        const miniBoards = [];

        for(let i = 0; i < 9; i++) {
            for(let k = 0; k < 9; k++) {
                if(columns[k] === undefined) {
                    columns[k] = [board[i][k]]
                } else {
                    columns[k].push(board[i][k])
                }

                const miniboardIndex = Math.floor(i/3) + (Math.floor(k/3) * 3);

                if(!miniBoards[miniboardIndex]) {
                    miniBoards[miniboardIndex] = [board[i][k]];
                } else {
                    miniBoards[miniboardIndex].push(board[i][k]);
                }
            }
        }

        const sortedRows = [...rows, ...columns, ...miniBoards].map((row) => row.sort())
        
        for(let i = 0; i < sortedRows.length; i++) {
            for(let k = 0; k < sortedRows[i].length; k++) {
                if(sortedRows[i][k] !== '.' && sortedRows[i][k] === sortedRows[i][k + 1]) {
                    return false;
                }    
            }
        }

        return true;
    }
}
