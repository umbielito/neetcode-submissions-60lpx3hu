class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums: number[]): number {
        const new_nums = [...nums, ...nums];
        let max = Infinity * -1;
        let numsQueue = [];

        for(let n of new_nums) {
            let queueSum = numsQueue.reduce((curr, sum) => curr + sum, 0);
            while(numsQueue.length && numsQueue.length === nums.length || queueSum < 0) {
                queueSum = queueSum - numsQueue.shift();
            }
            numsQueue.push(n)
            queueSum = queueSum + n
            max = Math.max(queueSum, max)
            
            const queueCopy = [...numsQueue]
        
            while(queueCopy.length > 1) {
                queueCopy.shift();
                const sum = queueCopy.reduce((curr, sum) => curr + sum, 0);
                max = Math.max(sum, max)
            }
        }

        return max;
    }
}
