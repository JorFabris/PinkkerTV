import React from 'react';
import {fireEvent, render, RenderAPI, act} from '@testing-library/react-native';

import mockNavigation from '../../mocks/NavigationMocks';

import LoginScreen from '@screens/login/LoginScreen';
import {getText} from '@getTexts';

let screen: RenderAPI;

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => ({params: {}}),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('LoginScreen:', () => {
  beforeEach(async () => {
    screen = render(<LoginScreen navigation={mockNavigation} />);
  });

  it('Shows LoginScreen ok', () => {
    const {getByText} = screen;
    expect(getByText(getText().login.forgotPassword)).toBeTruthy();
  });

  it('Error when EMAIL is invalid', () => {
    const {getByTestId} = screen;
    const inputEmail = getByTestId('LoginScreen.email');

    fireEvent.changeText(inputEmail, 'error');

    expect(getByTestId('SecureInput.error-email')).toBeTruthy();
  });

  it('Error when PASSWORD is invalid', () => {
    const {getByTestId} = screen;

    const inputPassword = getByTestId('LoginScreen.password');
    act(() => {
      fireEvent.changeText(inputPassword, 'err');
    });
    expect(getByTestId('SecureInput.error-password')).toBeTruthy();
  });

  it('Success when EMAIL AND PASSWORD are valid', () => {
    const {getByTestId} = screen;
    const inputEmail = getByTestId('LoginScreen.password');
    const inputPassword = getByTestId('LoginScreen.password');

    fireEvent.changeText(inputEmail, 'test@test');
    fireEvent.changeText(inputPassword, 'test123');

    expect(getByTestId('LoginScreen.loginButton')).not.toHaveProperty('disabled');
  });

  // it('Success when EMAIL AND PASSWORD are valid and redirect to home', () => {
  //     const { getByTestId } = screen;
  //     const inputEmail = getByTestId('LoginScreen.password');
  //     const inputPassword = getByTestId('LoginScreen.password');
  //     const loginButton = getByTestId('LoginScreen.loginButton');

  //     fireEvent.changeText(inputEmail, 'test@test');
  //     fireEvent.changeText(inputPassword, 'test123');

  //     fireEvent.press(loginButton);

  //     expect(mockedNavigate).toHaveBeenCalledWith('WatchNavigation');
  // });
});
