/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        let queue = []
        let output = []

        if(root) queue.push(root)

        while (queue.length) {
            let rightSide = null
            const batch = queue.length;

            for (let i = 0; i < batch; i++) {
                let current = queue.shift()
                if (current) {
                    rightSide = current.val
                    queue.push(current.left)
                    queue.push(current.right)
                }
            }
            if(rightSide) output.push(rightSide)

        }
        
        return output
    }
}
