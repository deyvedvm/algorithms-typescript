import StringsUtils from '../strings/strings.utils';

describe('Strings Utils Test', () => {
    let stringUtils: StringsUtils;

    beforeAll(() => {
        stringUtils = new StringsUtils();
    });

    beforeEach(() => {
    });

    afterEach(async () => {
    });

    it('Should check if word is palindrome', async () => {
        const mockString = 'madam';

        const palindrome = stringUtils.isPalindrome(mockString);

        expect(palindrome).toBeTruthy();
    });
});
