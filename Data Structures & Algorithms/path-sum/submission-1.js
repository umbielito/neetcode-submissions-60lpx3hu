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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {

        if (!root) return false;

        if(!root.left && !root.right) {
            if (targetSum - root.val === 0) {
                return true
            } 
            return false
        }

        let left = root.left ? this.hasPathSum(root.left, targetSum - root.val) : false;
        let right = root.right ? this.hasPathSum(root.right, targetSum - root.val) : false;
        return  left || right;

    }
}
