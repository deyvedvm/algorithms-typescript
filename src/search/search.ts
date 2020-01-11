export class Search {

    constructor() {
    }

    static binarySearch<T>(sortedArray: T[], element: T): number {
        let lowIndex = 0;
        let highIndex = sortedArray.length - 1;

        while (lowIndex <= highIndex) {
            let middleIndex = Math.floor((lowIndex + highIndex) / 2);

            if (sortedArray[middleIndex] == element) {
                return middleIndex;
            } else if (sortedArray[middleIndex] < element) {
                lowIndex = middleIndex + 1;
            } else {
                highIndex = middleIndex - 1;
            }
        }

        return -1;
    }
}
