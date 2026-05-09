class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        if (!prerequisites.length) return true;

        const coursesRequisites = new Array<Set<number>>(numCourses - 1);

        for (let [course, requisite] of prerequisites) {
            if (!coursesRequisites[course]) {
                coursesRequisites[course] = new Set();
            }
            if (!coursesRequisites[requisite]) {
                coursesRequisites[requisite] = new Set();
            }

            coursesRequisites[course].add(requisite);
        }

        function dfs(course: number, visited: Set<number> = new Set()) {
            if (visited.has(course)) return false;

            const requisites = coursesRequisites[course];

            if (requisites.size === 0) return true;

            visited.add(course);

            for (let req of requisites) {
                const canCompleteReq = dfs(req, visited);
                if (!canCompleteReq) return false;
                requisites.delete(req);
            }

            visited.delete(course);

            return true;
        }

        for (let i = 0; i < coursesRequisites.length; i++) {
            if (coursesRequisites[i] !== undefined) {
                const canComplete = dfs(i);
                if (!canComplete) return false;
            }
        }

        return true;
    }
}
