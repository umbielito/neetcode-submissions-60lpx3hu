class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []
        let sum = 0;

        for(let i = 0; i < operations.length; i++) {    
            let update = 0;
            if(operations[i] === '+') {
                update = stack[stack.length - 1] + stack[stack.length - 2]
                stack.push(update)
            } else if (operations[i] === 'C') {
                update = parseInt(stack[stack.length - 1]) * -1
                stack.pop()
            } else if (operations[i] === 'D') {
                update = stack[stack.length - 1] * 2
                stack.push(update) 
            } else {
                update = parseInt(operations[i])
                stack.push(update)
            }
            sum += update
        }

        return sum
    }
}
