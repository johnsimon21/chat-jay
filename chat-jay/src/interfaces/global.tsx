export interface FriendsActive {
    id: string;
    username: string;
    status: boolean | string;
    profilePicture: null | string;
}[]

export interface FriendMassage {
    id: string;
    username: string;
    message: string;
    sentTime: string;
    status: boolean | string;
    profilePicture: null | string;
}[]
export interface ChatGroup {
    id: string;
    groupName: string;
    username: string;
    message: string;
    sentTime: string;
    status: boolean | string;
}[]
export interface GroupsMessageListed {
    id: string;
    groupName: string;
    username: string;
    message: string;
    sentTime: string;
    messageQuantity: number;
}[]
export interface MyChat {
    id: string;
    username: string;
    message: string;
    sentTime: string;
    attachedFile?: string | null;
    attachedFileType?: string | null;
    attachedFilePreview?: string | null;
}[]
export interface FormMessage {
    message: string;
}