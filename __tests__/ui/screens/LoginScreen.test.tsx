import React from 'react';
import {fireEvent, render, RenderAPI, act, waitFor} from '@testing-library/react-native';

import mockNavigation from '../../mocks/NavigationMocks';

import LoginScreen from '@screens/login/LoginScreen';
import {getText} from '@getTexts';
import Screens from '../../../src/Screens';

let screen: RenderAPI;

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => ({params: {}}),
    useNavigation: () => ({
      navigate: mockedNavigate,
      replace: mockedNavigate,
    }),
  };
});

describe('LoginScreen:', () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    screen = render(<LoginScreen />);
  });

  it('Shows LoginScreen ok', () => {
    const {getByText} = screen;
    expect(getByText(getText().login.forgotPassword)).toBeTruthy();
  });

  it('Error when EMAIL is invalid', async () => {
    const {getByTestId} = screen;

    const inputEmail = getByTestId('LoginScreen.email');
    act(() => {
      fireEvent.changeText(inputEmail, 'error');
    });

    await waitFor(() => {
      const errorLabel = getByTestId('SecureInput.error-email').children[0];
      expect(errorLabel).toBe(getText().login.errors.email.valid);
    });
  });

  it('Error when PASSWORD is invalid', async () => {
    const {getByTestId} = screen;

    const inputPassword = getByTestId('LoginScreen.password');
    act(() => {
      fireEvent.changeText(inputPassword, 'err');
    });

    await waitFor(() => {
      const errorLabel = getByTestId(`SecureInput.error-password`).children[0];
      expect(errorLabel).toBe(getText().login.errors.password.min);
    });
  });

  it('Success when EMAIL AND PASSWORD are valid', async () => {
    const {getByTestId} = screen;
    const inputEmail = getByTestId('LoginScreen.email');
    const inputPassword = getByTestId('LoginScreen.password');

    fireEvent.changeText(inputEmail, 'test@test');
    fireEvent.changeText(inputPassword, 'test123');

    await waitFor(() => {
      const buttonLogin = getByTestId('LoginScreen.loginButton');

      expect(buttonLogin).toHaveProperty('props.accessibilityState', {
        disabled: false,
      });
    });
  });

  it('Error when EMAIL AND PASSWORD are invalid', async () => {
    const {getByTestId} = screen;
    const inputEmail = getByTestId('LoginScreen.email');
    const inputPassword = getByTestId('LoginScreen.password');

    fireEvent.changeText(inputEmail, 'test');
    fireEvent.changeText(inputPassword, 'tes');

    await waitFor(() => {
      const buttonLogin = getByTestId('LoginScreen.loginButton');

      expect(buttonLogin).toHaveProperty('props.accessibilityState', {
        disabled: true,
      });
    });
  });

  it('Success when EMAIL AND PASSWORD are valid and redirect to home', async () => {
    const {getByTestId} = screen;
    const inputEmail = getByTestId('LoginScreen.email');
    const inputPassword = getByTestId('LoginScreen.password');
    const loginButton = getByTestId('LoginScreen.loginButton');

    act(() => {
      fireEvent.changeText(inputEmail, 'test@test');
      fireEvent.changeText(inputPassword, 'test123');
    });
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(mockNavigation.replace).toHaveBeenCalledWith(Screens.Stack.WatchNavigation);
    });
  });

  it('Navigates to register', async () => {
    const {getByTestId} = screen;
    const registerButton = getByTestId('LoginScreen.registerButton');

    await waitFor(() => {
      fireEvent.press(registerButton);
      expect(mockNavigation.replace).toHaveBeenCalledWith(Screens.Stack.RegisterScreen);
    });
  });

  // it('', async () => {
  //   const {getByTestId} = screen;
  //   const inputEmail = getByTestId('LoginScreen.email');
  //   const inputPassword = getByTestId('LoginScreen.password');

  //   act(() => {
  //     fireEvent.changeText(inputEmail, 'test@test');
  //     fireEvent.changeText(inputPassword, 'test123');
  //   });

  //   await waitFor(() => {
  //     const loginButton = getByTestId('LoginScreen.loginButton');
  //     fireEvent.press(loginButton);
  //   });

  //   expect(mockNavigation.replace).toHaveBeenCalledWith(Screens.Stack.WatchNavigation);
  // });
});
