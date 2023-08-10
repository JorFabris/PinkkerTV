import React from 'react';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import LoginScreen from '../../../src/ui/screens/login/LoginScreen';
import mockNavigation from '../../mocks/NavigationMocks';
import { getText } from '../../../src/i18n/manageLocales';


let screen: RenderAPI;

describe('LoginScreen:', () => {

    beforeEach(async () => {
        screen = render(
            <LoginScreen navigation={mockNavigation} />
        );
    });


    it('Shows LoginScreen ok', () => {
        const { getByText } = screen
        expect(getByText(getText().login.forgotPassword)).toBeTruthy();
    });
})