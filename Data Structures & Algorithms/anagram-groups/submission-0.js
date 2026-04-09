class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const hashMap = {}

        const output = [];

        for(let i = 0; i < strs.length; i++) {

            const key = strs[i].split('').sort().join('');

            if(hashMap[key]) {
                hashMap[key].push(strs[i])
            } else {
                hashMap[key] = [strs[i]]
            }
        }

        for (const key of Object.keys(hashMap)) {
            output.push(hashMap[key]);
        }

        return output;

    }
}
