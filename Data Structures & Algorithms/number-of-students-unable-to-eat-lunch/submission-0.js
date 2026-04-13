class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        

        while(sandwiches.length) {
            const currentSandwich = sandwiches.shift();
            let counter = 0;
            let queueSize = students.length;
            while (counter < queueSize) {
                if(currentSandwich === students[0]) {
                    students.shift();
                    break;
                } else {
                    students.push(students.shift())
                }
                counter++;
            }

            if(queueSize === students.length) {
                return students.length;
            }

        }

        return students.length;

    }
}
