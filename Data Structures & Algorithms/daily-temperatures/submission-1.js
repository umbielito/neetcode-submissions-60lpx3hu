class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
      const output = Array(temperatures.length).fill(0)
      const stack = []
      for(let i = 0; i < temperatures.length; i++) {
        for(let j = stack.length - 1; j >= 0; j--) {
            if(temperatures[stack[j]] < temperatures[i]) {
                output[stack[j]] = i - stack[j]
                stack.pop();
            } else {
                break;
            }
        }
        stack.push(i)
      }
      return output;
    }
}
