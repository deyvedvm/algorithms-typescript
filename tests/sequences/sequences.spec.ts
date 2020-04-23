import Sequences from "../../src/sequences/sequences";

describe('Sequences Utils Test', () => {

    beforeAll(() => {
    });

    beforeEach(() => {
    });

    afterEach(async () => {
    });

    it('Calculate fibonacci sequence for 5 numbers', async () => {

        const expectedResult = Sequences.fibonacci(5);

        expect(expectedResult).toBe(5);
    });
});
