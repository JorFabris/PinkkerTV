import { useEffect, useState } from 'react';
import { Streams } from '@interfaces/GlobalInterfaces';
import { getStreams } from '@services/StreamsService';



const useStreams = () => {
    const [streams, setStreams] = useState<Streams[]>();
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        getLiveStreams();
    }, []);


    const getLiveStreams = async () => {
        try {
            const streamsList = await getStreams();

            setStreams(streamsList.streams);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };



    return {
        streams,
        loading,
    };

};


export default useStreams;
