export interface Follow{

    id: string;
    followerId: Follow;
    followedId: Follow;

}