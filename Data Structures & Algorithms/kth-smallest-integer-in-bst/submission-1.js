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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let counter = [k]
        this.dfs(root, counter)
        return counter[1]
    }

    dfs(node, counter) {
        if(!node) return
        this.dfs(node.left, counter)
        counter[0]--
        if(counter[0] === 0) {
            counter[1] = node.val
            return
        }
        this.dfs(node.right, counter)
    }

  
}
