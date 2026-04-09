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
        const ordered = this.inorder(root)
        return ordered[k - 1]
    }

    inorder(root) {
        if (!root) return []
        return [...this.inorder(root.left), root.val, ...this.inorder(root.right)]
    }
}
