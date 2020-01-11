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
});
