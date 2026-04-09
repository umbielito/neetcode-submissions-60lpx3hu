class Solution {
    result = []


    generateParenthesis(n) {
        this.buildStack(n)
        return this.result;
    }

    buildStack(n, stack = [], open = 0, close = 0) {
        if(open === n && close === n) {
            this.result.push(stack.join(''));
        } else {
            if(open < n) {
                this.buildStack(n, [...stack, '('], open + 1, close)
            }
            if(close < open) {
                this.buildStack(n, [...stack, ')'], open, close + 1)
            }
        }
    }



}
