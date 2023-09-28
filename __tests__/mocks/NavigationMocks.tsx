import { StackNavigationProp } from '@react-navigation/stack';

const mockNavigation: StackNavigationProp<any, any> = {
    addListener: jest.fn(),
    push: jest.fn(),
    canGoBack: jest.fn(),
    dispatch: jest.fn(),
    getId: jest.fn(),
    getParent: jest.fn(),
    getState: jest.fn(),
    goBack: jest.fn(),
    isFocused: jest.fn(),
    navigate: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    removeListener: jest.fn(),
    replace: jest.fn(),
    reset: jest.fn(),
    setOptions: jest.fn(),
    setParams: jest.fn(),
};



export default mockNavigation;
