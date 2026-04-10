class MinStack {
    stack = []
    minStack = []

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        let currentMin = this.minStack[this.minStack.length - 1] ?? null;
        this.minStack.push(currentMin !== null ? Math.min(currentMin, val) : val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
