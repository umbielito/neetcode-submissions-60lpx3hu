class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let up = 0, down = matrix.length - 1;
        while (up <= down) {
            let middle = Math.floor((up + down) / 2);
            if (target < matrix[middle][0]) {
                down = middle - 1
            } else if (target > matrix[middle][matrix[middle].length - 1]) {
                up = middle + 1
            } else {
                let l = 0, r = matrix[middle].length - 1
                while (l <= r) {
                    let middleRow = Math.floor((l + r) / 2)
                    if (target < matrix[middle][middleRow]) {
                        r = middleRow - 1
                    } else if (target > matrix[middle][middleRow]) {
                        l = middleRow + 1
                    } else {
                        return true
                    }
                }
                return false

            }

        }
        return false;
    }
}
