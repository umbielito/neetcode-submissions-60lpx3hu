class Solution {

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const hashMap = new Map([
            ['}', '{'],
            [')', '('],
            [']', '['],
        ])
        const stack = new Stack();

        for(let i = 0; i < s.length; i++) {
            if(Array.from(hashMap.values()).find(v => v === s[i])) {
                stack.add(s[i]);
            } else {
                if(hashMap.has(s[i]) && stack.top === hashMap.get(s[i])) {
                    stack.remove();
                } else {
                    return false;
                }
            }
        }

        if(stack.listLength) return false;

        return true;
    }
}

class Stack {
    list = [];

    add(item) {
        this.list.push(item)
    }

    remove() {
        this.list.pop();
    }

    get top() {
        return this.list[this.listLength - 1];
    }

    get listLength() {
        return this.list.length;
    }

}