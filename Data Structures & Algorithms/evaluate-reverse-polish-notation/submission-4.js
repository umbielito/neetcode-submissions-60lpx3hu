class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        
        for(let i = 0; i < tokens.length; i++) {
            if(this.isOperator(tokens[i])) {
                const n2 = stack.pop();
                const n1 = stack.pop();
                const result = eval(`(${n1})${tokens[i]}(${n2})`);
                stack.push(Math.trunc(result).toString());
            } else {
                stack.push(tokens[i])
            }
        }

        return stack[0]
    }

    isOperator(value) {
        return value === '+' || value === '-' || value === '*' || value === '/'
    }
}