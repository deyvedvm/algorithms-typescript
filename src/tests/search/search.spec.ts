import {Search} from "../../search/search";

describe('Search Test', () => {
    let search: Search;

    beforeAll(() => {
        search = new Search();
    });

    it('binarySearch ; should test with array of strings ; return index', () => {
        const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
        const sortedColors = colors.sort();

        const greenIndex = search.binarySearch(sortedColors, 'green');
        const redIndex = search.binarySearch(sortedColors, 'red');

        expect(greenIndex).toBe(1);
        expect(redIndex).toBe(4);
    });

    it('binarySearch ; should test with array of numbers ; return index', () => {
        const numbers = [23, 25, 5, 13, 3, 1, 8, 12];

        const sortedNumbers = numbers.sort((a, b) => a - b);

        const result = search.binarySearch(sortedNumbers, 8);

        expect(result).toBe(3);
    });
});
