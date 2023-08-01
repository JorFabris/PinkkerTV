import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../../../src/ui/screens/login/LoginScreen';
import mockNavigation from '../../mocks/NavigationMocks';




describe('LoginScreen:', () => {
    const { getByText } = render(
        <LoginScreen navigation={mockNavigation} />
    );

    it('It shows ok', () => {
        expect(getByText('¿Olvidaste tu contraseña?')).toBeTruthy();
    })
})