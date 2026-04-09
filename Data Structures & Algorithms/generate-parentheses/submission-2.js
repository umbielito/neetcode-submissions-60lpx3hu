class Solution {
    n;
    stack = []
    result = []


    generateParenthesis(n) {
        this.n = n;
        this.backtrack()
        return this.result
    }

    backtrack(open = 0, close = 0) {
        if(open === this.n && close === this.n) {
            this.result.push(this.stack.join(''))
        } else {
            if(open < this.n) {
                this.stack.push("(")
                this.backtrack(open + 1, close)
                this.stack.pop()
            }
            if(close < open) {
                this.stack.push(")")
                this.backtrack(open, close + 1)
                this.stack.pop();
            }
        }
    }



}
