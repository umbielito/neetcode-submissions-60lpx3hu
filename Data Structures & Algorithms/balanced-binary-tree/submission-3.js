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

    result = true;
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        this.dfs(root);
        return this.result;
    }

    dfs(root) {
     

    if(!root) return 0;

        if (!root.left && !root.right) return 1;

        const leftHeight = this.dfs(root.left);

        const rightHeight = this.dfs(root.right);

        const diff = Math.abs(leftHeight - rightHeight);

        if (diff > 1) {
            this.result = false;
        }

        const nodeHeight = Math.max(leftHeight, rightHeight) + 1;

        return nodeHeight;
    }

}
