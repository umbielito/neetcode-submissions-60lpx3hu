class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const map = {}

        for(let i = 0; i < 9; i++) {
            for(let k = 0; k < 9; k++) {
                if(board[i][k] !== '.') {
                    const rKey = 'r' + i;
                    if(this.isRepeated(map, rKey, board[i][k])) return false;

                    const cKey = 'c' + k;
                    if(this.isRepeated(map, cKey, board[i][k])) return false;

                    const bKey = 'b' + parseInt(Math.floor(i/3) + (Math.floor(k/3) * 3))
                    if(this.isRepeated(map, bKey, board[i][k])) return false;
                }
            }
        }

        return true;
    }

    isRepeated(map, key, value) {
        if(!map[key]) {
            map[key] = new Set();
        }

        if(map[key].has(value)) {
            return true;
        } 
            
        map[key].add(value);

        return false;
    }
}
