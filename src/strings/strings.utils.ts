export default class StringsUtils {

    public isPalindrome(str: string): boolean {

        return str.split('').reverse().join('') === str;
    }
}

