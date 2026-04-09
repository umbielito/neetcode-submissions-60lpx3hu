class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1

        for (let i = arr.length - 1; i >= 0; i--) {
            let tmp = max;
            if(arr[i] > max) {
                max = arr[i]
            }
            arr[i] = tmp;
        }

        return arr;
    }
}
