class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = {};

        for(let i = 0; i < nums.length; i++) {
            if(hashMap[nums[i]] === undefined) {
                hashMap[nums[i]] = 1;
            } else {
                hashMap[nums[i]] += 1;
            }
        }
        
        const sorted = Array.from({length: nums.length + 1}, () => []);

        for(const [n, occ] of Object.entries(hashMap)) {
            sorted[occ].push(n)
        }

        const answer = [];

        for(let i = nums.length; i > 0; i--) {

            if(sorted[i].length > 0)  {
                for(const n of sorted[i]) {
                    if(answer.length < k) {
                        answer.push(n);
                    } else {
                        break;
                    }
                }
            }

        }

        return answer;


    }
}
