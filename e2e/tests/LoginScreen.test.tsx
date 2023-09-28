import { by, device, expect, element } from 'detox';
import { getText } from '../../src/i18n/manageLocales';


describe('LoginScreen', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('Should render login screen', async () => {
        await expect(element(by.text(getText().login.forgotPassword))).toBeVisible();
    });

    it('Should show error messages for inputs', async () => {
        await element(by.id('LoginScreen.email')).typeText('error');
        await element(by.id('LoginScreen.password')).typeText('');

        await expect(element(by.text(getText().login.errors.email.valid))).toBeVisible();
        await expect(element(by.text(getText().login.errors.password.required))).toBeVisible();
    });

    it('Should redirect to HomeScreen', async () => {
        await element(by.id('LoginScreen.email')).typeText('test@test.com');
        await element(by.id('LoginScreen.password')).typeText('12345678');

        await element(by.id('LoginScreen.loginButton')).tap();
        await expect(element(by.text('HomeScreenView'))).toBeVisible();
    });

});
