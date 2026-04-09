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

        let index = 0;
        let words = []

        while(str[index] < str.length) {
            let n = "";

            while(str[index] !== '#') {
                n += str[index];
                index++;
            }

            let word = n !== '0' ? str.slice(index + 1, (index + 1) + parseInt(n)) : ''

            words.push(word)

            index = index + parseInt(n) + 1;
        }

      
        return words;
    }
}
