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
        clone.neighbors = node.neighbors.map(n => map.get(n) ?? this.dfs(n, map))
        return clone;
    }
}
