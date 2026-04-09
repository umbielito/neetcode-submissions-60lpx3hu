class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let a = 0;
        let b = s.length - 1;

        while(a <= b) {
            if(!/^[a-zA-Z0-9]+$/.test(s[a])) {
                a++;
                continue;
            }

            if(!/^[a-zA-Z0-9]+$/.test(s[b])) {
                b--;
                continue;
            }

            if(s[a].toUpperCase() !== s[b].toUpperCase()) {
                return false;
            } else {
                a++;
                b--;
            }
        }

        return true;
    }
}
