import { Streams } from '../interfaces/GlobalInterfaces';
import { ApiConnector } from './ApiConnector';


interface StreamsResponse {
    streams: Streams[]
}
const API_STREAMS = 'https://pinkkertv.free.beeceptor.com';
const TIMEOUT = 30000;
export const Connector = new ApiConnector();


export const getStreams = () => {
    return new Promise<StreamsResponse>(async (resolve, reject) => {
        const ENDPOINT = `${API_STREAMS}/streams`;
        try {
            const RESPONSE = await Connector.GET(ENDPOINT, {
                timeout: TIMEOUT,
            });
            resolve(RESPONSE.data);
        } catch (error) {
            console.log('ERROR Get streams', error);
            reject(error);
        }
    });
};
