class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let sMap = {}, tMap = {};

        for(let i = 0; i < s.length; i++) {
            sMap[s[i]] = (sMap[s[i]] || 0) + 1
            tMap[t[i]] = (tMap[t[i]] || 0) + 1
        }

        for(let key of Object.keys(sMap)) {
            if(sMap[key] !== tMap[key]) return false;
        }


        return true;
    }

}
