class Solution {
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adj: number[][] = Array.from({ length: numCourses }, () => []);
        
        for (const [course, pre] of prerequisites) {
            adj[course].push(pre);
        }

        const state: number[] = new Array(numCourses).fill(0);

        function hasCycle(course: number): boolean {
            if (state[course] === 1) return true; 
            if (state[course] === 2) return false; 

            state[course] = 1;

            for (const pre of adj[course]) {
                if (hasCycle(pre)) {
                    return true;
                }
            }

            state[course] = 2;
            return false;
        }

        for (let i = 0; i < numCourses; i++) {
            if (state[i] === 0) {
                if (hasCycle(i)) {
                    return false;
                }
            }
        }

        return true;
    }
}