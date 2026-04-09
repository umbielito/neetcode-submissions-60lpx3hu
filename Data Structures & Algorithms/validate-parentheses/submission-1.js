class Solution {

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = new Stack();

        for(let i = 0; i < s.length; i++) {
            console.log('entrou aqui')
            if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
                stack.add(s[i])
            } else {
                if(s[i] === ')') {
                    if(stack.top === '(') {
                        stack.remove();
                    } else {
                        return false;
                    }
                }
                if(s[i] === '}') {
                    if(stack.top === '{') {
                        stack.remove();
                    } else {
                        return false;
                    }
                }
                if(s[i] === ']') {
                    if(stack.top === '[') {
                        stack.remove();
                    } else {
                        return false;
                    }
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