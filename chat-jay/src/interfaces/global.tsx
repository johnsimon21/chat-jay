export interface FriendsActive {
    id: string;
    username: string;
    status: boolean | string;
}[]

export interface FriendMassage {
    id: string;
    username: string;
    message: string;
    sentTime: string;
    status: boolean | string;
}[]
export interface ChatGroup {
    id: string;
    username: string;
    message: string;
    sentTime: string;
    status: boolean | string;
}[]