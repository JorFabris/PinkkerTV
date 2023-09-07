import axios, { AxiosRequestConfig } from 'axios';
import RootStore from '../RootStore';

export class ApiConnector {
    GET = (URL: string, options: AxiosRequestConfig) => {
        return axios.get(URL, {
            ...options,
            headers: {
                'x-token': RootStore.token,
            },
        });
    };

    POST(URL: string, body: any, options: AxiosRequestConfig) {
        return axios.post(URL, body, {
            ...options,
            headers: {
                'x-token': RootStore.token,
            },
        });
    }

    PUT = (URL: string, body: any, options: AxiosRequestConfig) => {
        return axios.put(URL, body, {
            ...options,
            headers: {
                'x-token': RootStore.token,
            },
        });
    };

    DELETE = (URL: string, options: AxiosRequestConfig) => {
        return axios.delete(URL, {
            ...options,
            headers: {
                'x-token': RootStore.token,
            },
        });
    };

    LOGGER = () => { };
}
