/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null
        return this.dfs(node, new Map())
    }

    dfs(node, map) {
        const clone = new Node()
        clone.val = node.val;
        map.set(node, clone);
        clone.neighbors = node.neighbors.map(n => {
            return map.get(n) ?? this.dfs(n, map)
        })
        // for(let i = 0; i < node.neighbors.length; i++) {
        //     const cloned = map.get(node.neighbors[i])
        //     if(cloned) {
        //         clone.neighbors.push(cloned)
        //     }
        //     else {
        //         clone.neighbors.push(this.dfs(node.neighbors[i], map))
        //     }
        // }
        return clone;
    }
}
