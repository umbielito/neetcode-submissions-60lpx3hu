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
        
        const sorted = Object.entries(hashMap).sort(([_, qA], [__, qB]) => {
            return qB - qA;
        })

        const res = [];

        for(let i = 0; i < k; i++) {
            res.push(sorted[i][0]);
        }

        return res;
    }
}
