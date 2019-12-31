import StringsUtils from '../../strings/strings.utils';

describe('Strings Utils Test', () => {
    let stringUtils: StringsUtils;

    beforeAll(() => {
        stringUtils = new StringsUtils();
    });

    beforeEach(() => {
    });

    afterEach(async () => {
    });

    it('isPalindrome ; should check if word is palindrome ; return boolean', async () => {
        const mockString = 'madam';

        const palindrome = stringUtils.isPalindrome(mockString);

        expect(palindrome).toBeTruthy();
    });
});
