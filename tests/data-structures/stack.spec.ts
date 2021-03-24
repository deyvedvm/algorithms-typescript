import Stack from "../../src/data-structures/stack";

describe('Stack Tests', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>([]);
    });

    it('starts empty', async () => {

        expect(stack.size()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
    });

    it('pushes elements', () => {

        stack.push(1);
        stack.push(2);
        expect(stack.size()).toBe(2);

        expect(stack.isEmpty()).toBe(false);
    });

    it('pops elements', () => {

        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);

        expect(stack.isEmpty()).toBe(true);
    });

    it('clears the stack', () => {

        stack.push(1);
        stack.push(2);

        stack.clear();

        expect(stack.size()).toBe(0);
    });

    it('peek at the top element', () => {

        stack.push(1);
        stack.push(2);

        expect(stack.peek()).toBe(2);
        expect(stack.size()).toBe(2);
    });
});