export default class Sequences {

    static fibonacci(number: number): number {

        return (number <= 2) ? 1 : this.fibonacci(number - 1) + this.fibonacci(number - 2);
    }
}
