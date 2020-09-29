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

    it('oddLessons; should check if startMinute is odd ; return biology', async () => {
        const lessons = [
            {
                discipline: 'math',
                startHour: 11,
                startMinute: 0
            },
            {
                discipline: 'biology',
                startHour: 12,
                startMinute: 15
            },
        ];

        const result = StringsUtils.oddLessons(lessons);

        expect(result).toStrictEqual([{"discipline": "biology", "startHour": 12, "startMinute": 15}]);
    });

    it('numbersOfWorlds ; should count number of words ; return words and number', async () => {
        const phrase = 'Atirei o pau no gato, mas o gato não morreu.';

        const result = StringsUtils.numbersOfWorlds(phrase);

        expect(result).toStrictEqual([["Atirei", 1], ["o", 2], ["pau", 1], ["no", 1], ["gato", 2], ["mas", 1], ["não", 1], ["morreu", 1]]);
    });
});
