class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const hashMap = {}

        for(let i = 0; i < strs.length; i++) {

            let count = new Array(26).fill(0);

            for(let k = 0; k < strs[i].length; k++) {
                count[strs[i].charCodeAt(k) - 'a'.charCodeAt(0)] += 1;
            }

            if(hashMap[count] === undefined) {
                hashMap[count] = [strs[i]];
            } else {
                hashMap[count].push(strs[i]);
            }

        }

        return Object.values(hashMap);

    }
}
