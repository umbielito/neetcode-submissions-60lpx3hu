class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]) {
      if(!prerequisites.length) return true;

      const courses = new Map();

      for (let [course, requisite] of prerequisites) {
        if (!courses.has(course)) {
          courses.set(course, new Array());
        }

        if (!courses.has(requisite)) {
          courses.set(requisite, new Array());
        }

        courses.set(course, [...courses.get(course), requisite]);
      }

      function dfs(course: number, visited: number[] = []) {
        const hasCycle = visited.includes(course)
        
        if (hasCycle) {
          return false
        };

        const requisites = courses.get(course) as number[]

        if (!requisites.length) return true;

        for(let req of requisites) {
          const canCompleteReq = dfs(req, [...visited, course]);
          if(canCompleteReq) {
            courses.set(course, [...requisites.filter((r) => r !== req)])
          }
          if(!canCompleteReq) return false;
        }

        return true;
      }

      const coursesKeys = Array.from(courses.keys());

      let count = 0;
      
      for (let key of coursesKeys) {
        const canComplete = dfs(key);
        if(canComplete) count++;
      }
  
      return count >= numCourses - 1;
    }
    
}
