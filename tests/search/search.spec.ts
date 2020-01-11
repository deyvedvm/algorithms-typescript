import {Search} from "../../src/search/search";

describe('Search Test', () => {

    beforeAll(() => {
    });

    it('binarySearch ; should test with array of strings ; return index', () => {
        const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
        const sortedColors = colors.sort();

        const greenIndex = Search.binarySearch(sortedColors, 'green');
        const redIndex = Search.binarySearch(sortedColors, 'red');

        expect(greenIndex).toBe(1);
        expect(redIndex).toBe(4);
    });

    it('binarySearch ; should test with array of numbers ; return index', () => {
        const numbers = [23, 25, 5, 13, 3, 1, 8, 12];

        const sortedNumbers = numbers.sort((a, b) => a - b);

        const result = Search.binarySearch(sortedNumbers, 8);

        expect(result).toBe(3);
    });

    it('binarySearch ; should check if element is not in array  ; return -1', () => {
        const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
        const sortedColors = colors.sort();

        const redIndex = Search.binarySearch(sortedColors, 'black');

        expect(redIndex).toBe(-1);
    });
});
