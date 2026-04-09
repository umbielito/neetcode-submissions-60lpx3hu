class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const indexes = []
        for(let i = 0; i < temperatures.length; i++) {
            let res = 0;
            for(let j = i + 1; j < temperatures.length; j++) {
                if(temperatures[j] > temperatures[i]) {
                    res = j - i;
                    break;
                }
            }
            indexes.push(res)
        }
        return indexes;
    }
}
