class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sequences = [];
        let biggestSequence = 0;
        const sorted = nums.sort((a, b) => a - b);

        for(let i = 0; i < sorted.length; i++) {
            if(i !==  0 && sorted[i] - sorted[i - 1] <= 1) {
                if(sorted[i] - sorted[i - 1] === 0) continue;
                const lastArray = sequences[sequences.length - 1];
                lastArray.push(sorted[i])
                if(lastArray.length > biggestSequence) biggestSequence = lastArray.length;
            } else {
                if(biggestSequence === 0) biggestSequence = 1;
                sequences.push([sorted[i]])
            }
        }

        return biggestSequence;
    }
}
