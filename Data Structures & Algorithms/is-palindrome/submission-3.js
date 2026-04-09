class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let a = 0;
        let b = s.length - 1;

        while(a <= b) {

            while(!this.isAlphaNum(s[a])) a++;
            while(!this.isAlphaNum(s[b])) b--;

            if(s[a]?.toUpperCase() !== s[b]?.toUpperCase()) {
                return false;
            } 
            
            a++;
            b--;
            
        }

        return true;
    }

    isAlphaNum(n) {
        return /^[a-zA-Z0-9]+$/.test(n);
    }
}
