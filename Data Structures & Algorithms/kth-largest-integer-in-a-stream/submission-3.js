class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = new MinPriorityQueue();
        this.k = k;
    
        nums.forEach(n => this.add(n));   
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val);
        
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }

        return this.minHeap.front();
    }
}