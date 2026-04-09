class Solution {
    result = []
    
    generateParenthesis(n) {
        this.buildStack([], 0, 0, n);
        return this.result;
    }

    buildStack(stack, open, closed, n) {
        if(stack.length === n * 2 && open === closed) {
            this.result.push(stack.join(''));
        } else {
            if((open + 1) <= n) {
                this.buildStack([...stack, '('], open + 1, closed, n);
            } 
            if((closed + 1) <= open) {
                this.buildStack([...stack, ')'], open, closed + 1, n);
            }
        }

    }
}
