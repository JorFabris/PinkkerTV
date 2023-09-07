export interface Streams {
    cover: string;
    streamer: Streamer;
    viewers: number;
    streamStartedAt?: number;
    streamCategory: string;
    streamTitle: string;
    StreamStartedAt?: number;
}

export interface Streamer {
    nickName: string;
    categories: string[];
    createdAt: string;
    isPartner: boolean;
    mainIdiom: string;
}
