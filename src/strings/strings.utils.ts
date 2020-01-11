export default class StringsUtils {

    static isPalindrome(str: string): boolean {

        return str.split('').reverse().join('') === str;
    }
}

