class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let prevRow = Array.from({ length: n }).map(() => 0)

        for (let r = m - 1; r >= 0; r--) {
            console.log(`Trabalhando na linha ${r}`)
            const currRow = Array.from({ length: n }).map(() => 0)
            for (let c = n - 1; c >= 0; c--) {
                if(c === n - 1 && r === m - 1) {
                    currRow[c] = 1;
                    console.log(`Base case recebe 1: ${currRow[c]}`)
                } else {
                    currRow[c] = prevRow[c] + (currRow[c + 1] ?? 0)
                    console.log(`Calculando linha ${r} e coluna ${c}: ${currRow[c]}`)
                }
            }
            prevRow = currRow;
        }
        console.log(prevRow)
        return prevRow[0]
    }
}
