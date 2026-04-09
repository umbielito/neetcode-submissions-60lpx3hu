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
     * @return {number[][]}
     */
    levelOrder(root) {
        let level = 0
        let queue = []
        let output = []

        if(root) queue.push(root)

        while (queue.length) {
            console.log('LEVEL', level)
            const batch = queue.length;
            console.log('BATCH', batch)

            for (let i = 0; i < batch; i++) {

                let current = queue.shift()
                
                if(Array.isArray(output[level])) {
                    output[level].push(current.val)
                } else {
                    output[level] = [current.val]
                }
    
                if(current.left) {
                    queue.push(current.left)
                }

                if(current.right) {
                    queue.push(current.right)
                }

                console.log(`Filhos do ${current.val} adicionados à queue`)

            }

            console.log("AFTER FOR", queue)
            level++
        }

        return output   

    }
}
