class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";

        for(let i = 0; i < strs.length; i++) {
            encodedStr += `${strs[i].length}#${strs[i]}`;
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let words = []
        let i = 0;

        while(i < str.length) {

            let k = i;

            while(str[k] !== '#') {
                k++;
            }

            const length = str.substring(i, i + k);

            const word = str.substring(k + 1, k + 1 + parseInt(length));

            words.push(word)

            i = k + 1 + parseInt(length);
        }

        return words;
    }
}
