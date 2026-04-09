class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
       
        const output = []

        for(let i = 0; i <= nums.length - 3; i++) {
            for(let j = i + 1;j <= nums.length - 2; j++) {
                for(let k = j + 1; k <= nums.length - 1; k++) {
                    if(nums[i] + nums[j] + nums[k] === 0) {
                        let shouldPush = true;

                        for(let ans of output) {
                            let sortedCur = [nums[i], nums[k], nums[j]].sort((a, b) => a - b);

                            if(
                                ans[0] === sortedCur[0] &&
                                ans[1] === sortedCur[1] &&
                                ans[2] === sortedCur[2]
                            ) {
                                shouldPush = false;
                                break;
                            }
                        }

                        if(shouldPush) output.push(
                            [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
                        )
                    }
                }
            }
        }

        return output;
    }
}
