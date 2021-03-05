import StringsUtils from '../../src/strings/strings.utils';

describe('Strings Utils Test', () => {

    beforeAll(() => {
    });

    beforeEach(() => {
    });

    afterEach(async () => {
    });

    it('isPalindrome ; should check if word is palindrome ; return true', async () => {
        const mockString = 'madam';

        const palindrome = StringsUtils.isPalindrome(mockString);

        expect(palindrome).toBeTruthy();
    });

    it('isPalindrome ; should check if word is not palindrome ; return false', async () => {
        const mockString = 'geeks';

        const palindrome = StringsUtils.isPalindrome(mockString);

        expect(palindrome).toBeFalsy();
    });

    it('numbersOfWorlds ; should count number of words ; return words and number', async () => {
        const phrase = 'Atirei o pau no gato, mas o gato não morreu.';

        const result = StringsUtils.numbersOfWorlds(phrase);

        expect(result).toStrictEqual([["Atirei", 1], ["o", 2], ["pau", 1], ["no", 1], ["gato", 2], ["mas", 1], ["não", 1], ["morreu", 1]]);
    });
});
