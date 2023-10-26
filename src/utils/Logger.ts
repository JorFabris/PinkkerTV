import Reactotron from 'reactotron-react-native';

export default class Logger {
    static log = (message = 'Log', ...args: any) => {

        if (typeof message !== 'string') {
            throw new Error('Message has to be a string');
        }
        if (__DEV__) {
            Reactotron.display({
                name: 'LOG',
                preview: message,
                value: { message, args },
                important: true,
            });
        }
    };

    static warn = (message: string, ...args: any) => {
        if (__DEV__) {
            Reactotron.display({
                name: 'WARN',
                preview: message,
                value: { message, args },
                important: true,
            });
        }
    };

    static error = (message: string, report: any) => {
        if (__DEV__) {
            Reactotron.display({
                name: 'ERROR',
                preview: message,
                value: { message, ...report },
                important: true,
            });
        }
    };
}
