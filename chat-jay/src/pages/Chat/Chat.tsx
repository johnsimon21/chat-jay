import UserStatus from "../../components/UserStatus";
import profilePicture from "../../assets/profile.jpg"
import settingsIcon from "../../assets/settings.svg"
import notificationsIcon from "../../assets/notifications.svg"
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { HomeIcon } from "../../components/svg/Home";
import { NotificationIcon } from "../../components/svg/Notification";
import { VideoCallIcon } from "../../components/svg/VideoCall";
import { VoiceCallIcon } from "../../components/svg/VoiceCall";
import { SettingsIcon } from "../../components/svg/Settings";
import { RecordVoiceIcon } from "../../components/svg/RecordVoice";
import { SendMessageIcon } from "../../components/svg/SendMessage";
import { UserGroupIcon } from "../../components/svg/UsersGroup";
import { UserIcon } from "../../components/svg/User";
import { SearchIcon } from "../../components/svg/Search";
import { FriendsActive, FriendMassage, ChatGroup, FormMessage, MyChat, GroupsMessageListed } from "../../interfaces/global";
import { AttachIcon } from "../../components/svg/Attach";
import { EmojisIcon } from "../../components/svg/Emojis";
import { SubmitHandler, useForm } from "react-hook-form";
import moment from "moment-timezone";
import "./Chat.css"
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';


export default function Chat() {
    const friendsActive: FriendsActive[] = [
        {
            id: "aaa1",
            username: "Miguel Del Castilio",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa2",
            username: "King Dacis",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa3",
            username: "Mauro Twister",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa4",
            username: "Miguel Deep",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa5",
            username: "Abílio Bota Félix",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa6",
            username: "Nanga",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa7",
            username: "Ângelo Domingos",
            status: false,
            profilePicture: null,
        },
        {
            id: "aaa8",
            username: "João Beto",
            status: false,
            profilePicture: null,
        },
    ];

    const userInfo = { // this info comes from DB after login
        id: "aaa1",
        username: "Java Simon Script"
    }
    const friendInfo = { // this info comes from DB after login
        id: "aaa2",
        username: "Miguel Del Castilio",
        status: true,
        profilePicture: null
    }

    const friendsMessages: FriendMassage[] = [
        {
            id: "aaa2",
            username: "Miguel Del Castilio",
            message: "222-2 Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa1",
            username: "King Dacis",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa1",
            username: "Mauro Twister",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa2",
            username: "Miguel Deep",
            message: "2222 Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa2",
            username: "Abílio Bota Félix",
            message: "2222 Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa1",
            username: "Nanga",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa1",
            username: "Ângelo Domingos",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router",
            sentTime: "2024-07-06 17:39:24",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa2",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true,
            profilePicture: null
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true,
            profilePicture: null
        },
    ]
    const chatGroup: ChatGroup[] = [
        {
            id: "aaa1",
            groupName: "< Frontend Developers />",
            username: "Miguel Del Castilio",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa2",
            groupName: "< Backend Developers />",
            username: "King Dacis",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa1",
            groupName: "< Frontend Developers />",
            username: "Mauro Twister",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa2",
            groupName: "< Backend Developers />",
            username: "Miguel Deep",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa1",
            groupName: "< Frontend Developers />",
            username: "Abílio Bota Félix",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa1",
            groupName: "< Frontend Developers />",
            username: "Nanga",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa1",
            groupName: "< Frontend Developers />",
            username: "Ângelo Domingos",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: false
        },
        {
            id: "aaa1",
            groupName: "< Frontend Developers />",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: false
        },
    ]

    const [showNotifications, setShowNotification] = useState<boolean>(true)
    const [myChat, setMyChat] = useState<MyChat[]>([
        {
            id: "aaa2",
            username: "Miguel Del Castilio",
            message: "222-2 Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-05 17:39:24"
        },
        {
            id: "aaa1",
            username: "King Dacis",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa1",
            username: "Mauro Twister",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-07 17:39:24"
        },
        {
            id: "aaa2",
            username: "Miguel Deep",
            message: "2222 Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-08 17:39:24"
        },
        {
            id: "aaa2",
            username: "Abílio Bota Félix",
            message: "2222 Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-09 17:39:24"
        },
        {
            id: "aaa1",
            username: "Nanga",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-10 17:39:24"
        },
        {
            id: "aaa1",
            username: "Ângelo Domingos",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa2",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa2",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa2",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
        },
    ])

    const [notViewedNotification, setNotViewedNotification] = useState<{ id: string }[]>([
        {
            id: "aaa1"
        },
        {
            id: "aaa2"
        },
        {
            id: "aaa3"
        },
        {
            id: "aaa4"
        },
        {
            id: "aaa5"
        },
    ])

    function handleViewedNotification(id: string) {

        if (notViewedNotification.some(notification => notification.id === id)) {
            setNotViewedNotification(prevNotifications =>
                prevNotifications.filter(notification => notification.id !== id)
            );
        }

    }

    function handleNotificationClass(id: string) {
        let newNotificationClass = "flex basis-full cursor-pointer items-center py-2 hover:bg-[#3B3D4A]";;
        if (notViewedNotification.some(notification => notification.id === id)) {
            newNotificationClass = "flex basis-full cursor-pointer items-center py-2 hover:bg-[#3B3D4A]"
        }

        return newNotificationClass
    }

    function handleShowNotifications() {
        if (showNotifications) {
            setShowNotification(false)
            console.log(showNotifications)
        }
    }

    function getFirstNameFromCompleteName(completeName: string): string {
        const firstName = completeName.split(" ")[0]

        return firstName
    }

    const [inputMessageValue, setInputMessageValue] = useState<string>('');

    const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm<FormMessage>();
    const [localTime, setLocalTime] = useState<string>('');
    const [message, setMessage] = useState<string>();
    const [typingMessage, setTypingMessage] = useState<string>();
    const [timeZone, setTimeZone] = useState<string>('');
    const [currentTimestamp, setCurrentTimestamp] = useState<string>('hoje');
    const inputMessage = useRef<HTMLInputElement>(null);
    const lastElementRef = useRef<HTMLLIElement | null>(null);
    const chatContainerRef = useRef<HTMLUListElement>(null);
    const [attachedFile, setAttachedFile] = useState<File | null>(null);
    const [attachedFileName, setAttachedFileName] = useState<string>('');
    const [attachedFilePreview, setAttachedFilePreview] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const MAX_FILE_SIZE = 50 * 1024 * 1024;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                setErrorMessage('O arquivo excedeu o limite de 30MB.');
                setAttachedFile(null);
                setAttachedFileName('');
                setAttachedFilePreview(null);
            } else {
                setAttachedFile(file);
                setAttachedFileName(file.name);
                setErrorMessage('');
                if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        setAttachedFilePreview(event.target?.result as string);
                    };
                    reader.readAsDataURL(file);
                } else {
                    setAttachedFilePreview(null);
                }
            }
        }
    };

    const handleAttachButtonClick = (): void => {
        const fileInput = document.querySelector('input[type=file]') as HTMLInputElement | null;
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleRemoveFile = (): void => {
        setAttachedFile(null);
        setAttachedFileName('');
        setAttachedFilePreview(null);
        setErrorMessage('');
    };


    function handleMessageTyping(event: ChangeEvent<HTMLInputElement>) {
        setInputMessageValue(event.target.value.trim());
        setTypingMessage(event.target.value)
    };
    useEffect(() => {
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimeZone(userTimeZone);
    }, []);

    const handleScrollToLastElement = () => {
        if (lastElementRef.current) {
            lastElementRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        handleScrollToLastElement();
    }, [myChat]);

    const handleSendMessage = () => {
        if (inputMessageValue.trim() !== '' || attachedFile) {
            const time = getCurrentTime();
            console.log({ name: inputMessageValue, localTime: time });

            setLocalTime(time);
            const newMessgeChat = {
                id: userInfo.id,
                username: userInfo.username,
                message: inputMessageValue,
                sentTime: time,
                attachedFile: attachedFile ? attachedFile.name : null,
                attachedFileType: attachedFile ? attachedFile.type : null,
                attachedFilePreview: attachedFilePreview
            }
            setMyChat(prevElements => [...prevElements, newMessgeChat]);
            handleScrollToLastElement()

            if (inputMessage.current) {
                inputMessage.current.value = '';
            }

            setInputMessageValue('')
            setTypingMessage('')
            setAttachedFile(null);
            setAttachedFileName('');
            setAttachedFilePreview(null);
            setErrorMessage('');
        }
    };

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const addEmoji = (emoji: { native: string; }) => {
        setInputMessageValue((prevMessage) => prevMessage + emoji.native);
        setTypingMessage((prevMessage) => prevMessage + emoji.native);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSendMessage();
        }
    };

    function getCurrentTime() {
        const time = moment().tz(timeZone).format('YYYY-MM-DD HH:mm:ss');

        return time
    }

    function getTimeOfSentMessage(time: string) {

        const hour = new Date(time).getHours()
        const minutes = new Date(time).getMinutes()
        console.log(time)
        return hour + ":" + minutes
    }

    const classValue = "w-[17px] fill-[#ACB7F8]"
    const userClassValue = "w-[25px] fill-[#BEBEC0]"
    const friendMessageClass = "relative bg-[#3D4051] rounded-b-xl rounded-r-xl text-sm self-start mt-5 w-fit max-w-[60%] px-5 pt-[10px] pb-5"
    const friendMessageClassBottom = "relative bg-[#3D4051] rounded-b-xl rounded-r-xl rounded-s-xl text-sm self-start mt-1 w-fit max-w-[60%] px-5 pt-[10px] pb-5"
    const MyMessageClass = "relative bg-[#645397] rounded-b-xl rounded-s-xl text-sm self-end mt-5 w-fit max-w-[60%] px-5 pt-[10px] pb-5"
    const MyMessageClassBottom = "relative bg-[#645397] rounded-b-xl rounded-s-xl rounded-r-xl text-sm self-end mt-1 w-fit max-w-[60%] min-w-11 px-4 pt-[5px] pb-6"

    const handleScroll = () => {
        if (!chatContainerRef.current) return;

        const messagesElements = chatContainerRef.current.querySelectorAll('.messageItem');
        let currentTime = '';

        messagesElements.forEach((messageElement) => {
            const messageTop = messageElement.getBoundingClientRect().top;
            const containerTop = chatContainerRef.current!.getBoundingClientRect().top;

            if (messageTop < containerTop + 90) {
                currentTime = messageElement.getAttribute('data-time') || '';
            }
        });

        if (currentTime) {
            setCurrentTimestamp(currentTime);
        }
    };

    function gepMessageTimestamp(currentTimestampValue: string | Date) {
        const DateConstructor = new Date(currentTimestampValue)

        const currentDate = new Date()
        const currentYear = currentDate.getFullYear()
        const currentMonth = currentDate.getMonth()
        const currentDayOfMonth = currentDate.getDate()

        let timestamp = "";
        const newDate = DateConstructor.getDate().toString().length === 1 ? '0' + DateConstructor.getDate() : DateConstructor.getDate()

        if (currentYear === DateConstructor.getFullYear()) {
            if (currentMonth === DateConstructor.getMonth()) {

                switch (DateConstructor.getDate()) {
                    case currentDayOfMonth:
                        timestamp = 'Hoje'
                        break;

                    default:
                        timestamp = newDate + '/' + DateConstructor.getMonth() + '/' + DateConstructor.getFullYear()
                        break;
                }
            }
        }

        return timestamp
    }

    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            chatContainer.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (chatContainer) {
                chatContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    function handleListGroupsMessages(chatGroups: ChatGroup[]): GroupsMessageListed[] {
        let groupsMessageListed: GroupsMessageListed[] = [];
        let messageCounter = 0;

        for (const chatGroupItem of chatGroups) {
            const groupMessage = groupsMessageListed.find(groupListed => groupListed.id === chatGroupItem.id)
            if (!groupMessage) {
                groupsMessageListed.push({
                    id: chatGroupItem.id,
                    groupName: chatGroupItem.groupName,
                    username: chatGroupItem.username,
                    message: chatGroupItem.message,
                    sentTime: chatGroupItem.sentTime,
                    messageQuantity: messageCounter++,
                });
            } else {
                groupMessage.messageQuantity++
            }
        }
        return groupsMessageListed
    }


    // const addEmoji = (emoji: { native: string | number; }) => {
    //     if(message){
    //         setMessage((prevMessage) => prevMessage! + emoji.native);
    //     }else {
    //         setMessage('' + emoji.native);
    //     }
    // };


    return (
        <div className="flex basis-full h-screen">
            <div className="side-bar-left flex flex-col items-center w-[120px] h-screen bg-[#2B2D38] rounded-r-lg">
                <div className="logo text-white text-lg font-bold">Chat-Jay</div>

                <ul className="medias w-fit mt-20 grow">
                    <li
                        className="musics w-14 h-14 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-xl flex justify-center items-center text-white font-bold cursor-pointer">
                        Musics
                    </li>
                    <li
                        className="videos my-3 w-14 h-14 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-xl flex justify-center items-center text-white font-bold cursor-pointer">
                        Videos
                    </li>
                </ul>

                <div className="profile-area self-center h-16 my-2">
                    <div className="profile-picture mx-auto w-8 h-8 bg-indigo-500 rounded-full mb-1 relative">
                        <UserStatus userStatus={true} />
                        <img
                            src={profilePicture}
                            alt="imagem de perfil"
                            className="w-full h-full rounded-full border border-indigo-500" />
                    </div>
                    <div className="username text-center text-xs text-white">
                        John Simon
                    </div>
                </div>
            </div>

            <div className="message-section flex flex-col text-white text-2xl grow basis-full h-screen relative overflow-hidden">

                <div className="grow flex items-end justify-start mt-10">
                    <div className="user-call relative self-start z-10 flex w-58 h-12 px-2 bg-[#3E4153] rounded-r-2xl text-white">
                        <div className="friend-info flex items-center basis-full">
                            <div className="profile-picture  w-8 h-8 bg-indigo-500 rounded-full mb-1 relative">
                                <UserStatus userStatus={true} />
                                {friendInfo.profilePicture ?
                                    (
                                        <img src={friendInfo.profilePicture} alt="imagem de perfil" className="w-full h-full rounded-full border border-indigo-500" />
                                    ) : (
                                        <div className="friend-picture relative flex h-full w-full justify-center items-center">
                                            <UserStatus userStatus={true} />
                                            <UserIcon classValue={userClassValue} />
                                        </div>
                                    )}
                            </div>
                            <div className="username text-center text-xs text-white mx-2 truncate">
                                {friendInfo.username}
                            </div>
                        </div>
                        <div className="buttons self-center flex flex-row-reverse">
                            <div className="notifications-button w-8 h-8 mx-2 flex items-center justify-center text-lg text-[#55ED6E] rounded-full bg-[#404251] bg-gradient-to-r from-[#202128] to-[#404251] cursor-pointer border-2 border-[#3B3D47] shadow-black shadow-md">
                                <VideoCallIcon classValue={classValue} />
                            </div>
                            <div className="home-button w-8 h-8 flex items-center justify-center text-lg text-[#55ED6E] rounded-full bg-[#404251] bg-gradient-to-r from-[#202128] to-[#404251] cursor-pointer border-2 border-[#3B3D47] shadow-black shadow-md">
                                <VoiceCallIcon classValue={classValue} />
                            </div>
                        </div>
                        <div className="absolute top-[50px] right-4 bg-[#3E4153] min-w-16 rounded-b-xl text-center text-sm p-2">
                            {gepMessageTimestamp(currentTimestamp)}
                        </div>
                    </div>
                </div>

                <ul className="messages-reading absolute flex flex-col overflow-auto px-4 inset-x-0 top-0 inset-y-0 py-28" ref={chatContainerRef}>
                    {myChat.map((friendMessage, messageIndex) => (
                        messageIndex === myChat.length - 1 ? (
                            friendMessage.id === userInfo.id ? (
                                <li
                                    ref={lastElementRef}
                                    key={friendMessage.id}
                                    className="messageItem w-full flex flex-col"
                                    data-time={friendMessage.sentTime}
                                >
                                    {friendMessage.attachedFilePreview && (
                                        <div className="mt-2">
                                            {friendMessage.attachedFileType?.startsWith('image/') && (
                                                <img src={friendMessage.attachedFilePreview} alt={friendMessage.attachedFile || ''} className="max-w-64" />
                                            )}
                                            {friendMessage.attachedFileType?.startsWith('video/') && (
                                                <video controls style={{ maxWidth: '100px', maxHeight: '100px' }}>
                                                    <source src={friendMessage.attachedFilePreview} type={friendMessage.attachedFileType} />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )}
                                        </div>
                                    )}
                                    {myChat[messageIndex - 1]?.id === friendMessage.id ? (
                                        <span className={MyMessageClassBottom}>
                                            {friendMessage.message}
                                            <span className="text-white absolute start-3 bottom-[2px] text-[.6rem] text-[#C3C3C3]">
                                                {getTimeOfSentMessage(friendMessage.sentTime)}
                                            </span>
                                        </span>
                                    ) : (
                                        <span className={MyMessageClass}>
                                            {friendMessage.message}
                                            <span className="text-white absolute start-3 bottom-[2px] text-[.6rem] text-[#C3C3C3]">
                                                {getTimeOfSentMessage(friendMessage.sentTime)}
                                            </span>
                                        </span>
                                    )}
                                </li>
                            ) : (
                                <li
                                    ref={lastElementRef}
                                    key={friendMessage.id}
                                    className="messageItem w-full flex flex-col"
                                    data-time={friendMessage.sentTime}>
                                    {myChat[messageIndex - 1]?.id === friendMessage.id ? (
                                        <span className={friendMessageClassBottom}>
                                            {friendMessage.message}
                                            <span className="text-white absolute right-3 bottom-[2px] text-[.6rem] text-[#C3C3C3]">
                                                {getTimeOfSentMessage(friendMessage.sentTime)}
                                            </span>
                                        </span>
                                    ) : (
                                        <span className={friendMessageClass}>
                                            {friendMessage.message}
                                            <span className="text-white absolute right-3 bottom-[2px] text-[.6rem] text-[#C3C3C3]">
                                                {getTimeOfSentMessage(friendMessage.sentTime)}
                                            </span>
                                        </span>
                                    )}
                                    {friendMessage.attachedFilePreview && (
                                        <div className="mt-2">
                                            {friendMessage.attachedFileType?.startsWith('image/') && (
                                                <img src={friendMessage.attachedFilePreview} alt={friendMessage.attachedFile || ''} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                                            )}
                                            {friendMessage.attachedFileType?.startsWith('video/') && (
                                                <video controls style={{ maxWidth: '100px', maxHeight: '100px' }}>
                                                    <source src={friendMessage.attachedFilePreview} type={friendMessage.attachedFileType} />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )}
                                        </div>
                                    )}
                                </li>
                            )
                        ) : (
                            friendMessage.id === userInfo.id ? (
                                <li key={friendMessage.id} className="messageItem w-full flex flex-col" data-time={friendMessage.sentTime}>
                                    {myChat[messageIndex - 1]?.id === friendMessage.id ? (
                                        <span className={MyMessageClassBottom}>
                                            {friendMessage.message}
                                            <span className="text-white absolute start-3 bottom-[2px] text-[.6rem] text-[#C3C3C3]">
                                                {getTimeOfSentMessage(friendMessage.sentTime)}
                                            </span>
                                        </span>
                                    ) : (
                                        <span className={MyMessageClass}>
                                            {friendMessage.message}
                                            <span className="text-white absolute start-3 bottom-[2px] text-[.6rem] text-[#C3C3C3]">
                                                {getTimeOfSentMessage(friendMessage.sentTime)}
                                            </span>
                                        </span>
                                    )}
                                    {friendMessage.attachedFilePreview && (
                                        <div className="mt-2">
                                            {friendMessage.attachedFileType?.startsWith('image/') && (
                                                <img src={friendMessage.attachedFilePreview} alt={friendMessage.attachedFile || ''} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                                            )}
                                            {friendMessage.attachedFileType?.startsWith('video/') && (
                                                <video controls style={{ maxWidth: '100px', maxHeight: '100px' }}>
                                                    <source src={friendMessage.attachedFilePreview} type={friendMessage.attachedFileType} />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )}
                                        </div>
                                    )}
                                </li>
                            ) : (
                                <li key={friendMessage.id} className="messageItem w-full flex flex-col" data-time={friendMessage.sentTime}>
                                    {myChat[messageIndex - 1]?.id === friendMessage.id ? (
                                        <span className={friendMessageClassBottom}>
                                            {friendMessage.message}
                                            <span className="text-white absolute right-3 bottom-[2px] text-[.6rem] text-[#C3C3C3]">
                                                {getTimeOfSentMessage(friendMessage.sentTime)}
                                            </span>
                                        </span>
                                    ) : (
                                        <span className={friendMessageClass}>
                                            {friendMessage.message}
                                            <span className="text-white absolute right-3 bottom-[2px] text-[.6rem] text-[#C3C3C3]">
                                                {getTimeOfSentMessage(friendMessage.sentTime)}
                                            </span>
                                        </span>
                                    )}
                                    {friendMessage.attachedFilePreview && (
                                        <div className="mt-2">
                                            {friendMessage.attachedFileType?.startsWith('image/') && (
                                                <img src={friendMessage.attachedFilePreview} alt={friendMessage.attachedFile || ''} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                                            )}
                                            {friendMessage.attachedFileType?.startsWith('video/') && (
                                                <video controls style={{ maxWidth: '100px', maxHeight: '100px' }}>
                                                    <source src={friendMessage.attachedFilePreview} type={friendMessage.attachedFileType} />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )}
                                        </div>
                                    )}
                                </li>
                            )
                        )
                    ))}
                </ul>


                <div className="grow flex items-end justify-center pe-3">
                    <div className="z-10 flex justify-center w-full h-24 px-2 bg-[#1f2029] text-white">
                        <div
                            className="flex basis-[90%] items-center justify-center text-sm"
                        >
                            <div className="relative">
                                <button
                                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                    id="emoji-button"
                                    className={`text-white flex items-center justify-center w-16 h-12 rounded-s-xl bg-[#2B2D38] hover:bg-[#383B4D] transition duration-300 ease-in-out`} >
                                    <EmojisIcon classValue="w-6 fill-[#fff]" />
                                </button>
                                {showEmojiPicker && (
                                    <div className="absolute bottom-14">
                                        <Picker data={data} onEmojiSelect={addEmoji} />
                                    </div>
                                )}
                            </div>

                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"
                                ref={(fileInput) => fileInput && fileInput.setAttribute('multiple', 'multiple')}
                            />
                            <div className="relative">
                                {errorMessage && (
                                    <div className="absolute bottom-14 left-[-60px] text-nowrap text-red-300 p-2 bg-[#2B2D38] rounded">
                                        {errorMessage}
                                    </div>
                                )}
                                {attachedFileName && !errorMessage && (
                                    <div className="absolute bottom-14 left-[-50px] max-w-64 min-h-20 min-w-64 bg-[#33374F] rounded">
                                        <button
                                            onClick={handleRemoveFile}
                                            className="absolute left-1 flex z-10 m-2 w-5 h-5 bg-[#33374F] hover:bg-[#2B2D38] border rounded-full">
                                            <span className="flex basis-full self-center justify-center text-[.6rem] ">X</span>
                                        </button>

                                        {attachedFilePreview ? (
                                            <>
                                                {attachedFile && attachedFile.type.startsWith('image/') && (
                                                    <img src={attachedFilePreview} alt={attachedFileName} className="max-w-64 p-1" />
                                                )}
                                                {attachedFile && attachedFile.type.startsWith('video/') && (
                                                    <video controls className="max-w-80 p-1">
                                                        <source src={attachedFilePreview} type={attachedFile.type} />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                )}
                                            </>
                                        ) : (
                                            <span className="flex p-2 pt-10"><strong className="pe-1">Anexo:</strong>{attachedFileName}</span>
                                        )}
                                    </div>
                                )}

                                <button onClick={handleAttachButtonClick} id="attach-button" className={`text-white items-center flex justify-center items-center w-16 h-12 bg-[#2B2D38] hover:bg-[#383B4D] transition duration-300 ease-in-out`}>

                                    <AttachIcon classValue="w-5 fill-[#fff]" />
                                </button>
                            </div>

                            <input
                                type="text"
                                id="message"
                                ref={inputMessage}
                                value={typingMessage}
                                onChange={handleMessageTyping}
                                onKeyDown={handleKeyPress}
                                className=" w-full min-h-12 px-2 text-[#B4B4B5] bg-[#2B2D38] outline-none" placeholder="Digite uma mensagem..." />

                            {inputMessageValue === '' ?
                                (<div className="send-message-button cursor-pointer bg-[#2B2D38] rounded-e-xl text-white flex items-center justify-center w-16 h-12 hover:bg-[#383B4D] transition duration-300 ease-in-out">
                                    <RecordVoiceIcon classValue="w-6 rounded fill-[#ACB7F8]" />
                                </div>
                                ) : (
                                    <button
                                        type="submit"
                                        onClick={handleSendMessage}
                                        className="send-message-button bg-[#2B2D38] rounded-e-xl text-white flex items-center justify-center w-16 h-12 hover:bg-[#383B4D] transition duration-300 ease-in-out">
                                        <SendMessageIcon classValue="w-5 rounded fill-[#ACB7F8]" />
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>

            <div className="side-bar-right rounded-s-2xl max-w-[400px] w-[400px] h-screen py-4 px-4 bg-[#2B2D38]">
                <div className="flex flex-col h-full space-y-2">
                    <div className="buttons flex flex-row-reverse">
                        <div className="settings-button w-9 h-9 flex items-center justify-center text-lg text-[#55ED6E] rounded-full bg-[#404251] bg-gradient-to-r from-[#202128] to-[#404251] cursor-pointer border-2 border-[#3B3D47] shadow-black shadow-md">
                            <SettingsIcon classValue={classValue} />
                        </div>
                        <div className="notifications-button w-9 h-9 mx-2 flex items-center justify-center text-lg text-[#55ED6E] rounded-full bg-[#404251] bg-gradient-to-r from-[#202128] to-[#404251] cursor-pointer border-2 border-[#3B3D47] shadow-black shadow-md">
                            <NotificationIcon classValue={classValue} />
                        </div>
                        <div className="home-button w-9 h-9 flex items-center justify-center text-lg text-[#55ED6E] rounded-full bg-[#404251] bg-gradient-to-r from-[#202128] to-[#404251] cursor-pointer border-2 border-[#3B3D47] shadow-black shadow-md">
                            <HomeIcon classValue={classValue} />
                        </div>
                    </div>

                    <div className="actives">
                        <div className="active text-[#F2F2F2] font-bold mb-2">Ativos</div>
                        <ul className="active-friends flex space-x-2 text-[.7rem] text-[#F2F2F2]">
                            {friendsActive.map(friendActive => (
                                <li key={friendActive.id} className="friend w-11 p-[2px] flex flex-col items-center bg-[#3C3E48] rounded-md cursor-pointer">
                                    <div className="picture w-9 h-7 bg-[#587CC0] rounded-md relative flex items-end justify-center">
                                        <UserStatus userStatus={true} />
                                        {friendActive.profilePicture ? (
                                            <img src={friendActive.profilePicture} alt="imagem de perfil" className="min-w-7 h-full " />
                                        ) : (
                                            <UserIcon classValue={userClassValue} />
                                        )}
                                    </div>
                                    <div className="name pt-[5px]">
                                        {getFirstNameFromCompleteName(friendActive.username)}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="search flex">
                        <button name="search-button" id="search-button" className={`text-white flex items-center justify-center w-10 h-9 p-1 rounded-s-2xl bg-[#3E4153]`} >
                            <SearchIcon classValue="w-5 fill-[#ACB7F8]" />
                        </button>
                        <input type="text" name="search" id="search" className="rounded-e-2xl w-full max-w-72 p-1 text-[#B4B4B5] bg-[#3E4153] outline-none" placeholder="Buscar" />
                    </div>

                    <div className="chat h-[65%] grow">
                        <div className="messages max-h-[50%] overflow-hidden">
                            <div className="message text-[#F2F2F2] font-bold mb-2">Mensagens</div>
                            <ul className="flex flex-col">
                                {friendsMessages.map((friendMessage) => (
                                    <li
                                        key={friendMessage.id}
                                        onClick={() => handleViewedNotification(friendMessage.id)}
                                        className={handleNotificationClass(friendMessage.id)}
                                    >
                                        <div className="friend-profile ms-3 me-2">
                                            <div className="w-8 h-8 bg-[#587CC0] rounded-full relative flex justify-center">
                                                <UserStatus userStatus={friendMessage.status} />
                                                {friendMessage.profilePicture ?
                                                    (
                                                        <img src={friendMessage.profilePicture} alt="imagem de perfil" className="w-full h-full rounded-full border border-indigo-500" />
                                                    ) : (
                                                        <div className="friend-picture relative flex h-full w-full justify-center items-center">
                                                            <UserStatus userStatus={true} />
                                                            <UserIcon classValue={userClassValue} />
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>

                                        <div className="friend-info flex flex-col me-3 text-left text-sm">
                                            <span className="friend-name text-white">
                                                {friendMessage.username}
                                            </span>
                                            <span className="friend-notifications mt-1 h-8 text-[#B9B9B9] text-xs whitespace-normal text-wrap text-ellipsis overflow-hidden">
                                                {friendMessage.message}
                                            </span>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>

                        <div className="chat-group max-h-[50%] overflow-hidden">
                            <div className="chat-group-text text-[#F2F2F2] font-bold my-2">Chat - Group</div>
                            <ul className="flex flex-col">
                                {handleListGroupsMessages(chatGroup).map((chatGroupItem) => (
                                    <li
                                        key={chatGroupItem.id}
                                        onClick={() => handleViewedNotification(chatGroupItem.id)}
                                        className={handleNotificationClass(chatGroupItem.id)}
                                    >
                                        <div className="friend-profile ms-3 me-2">
                                            <div className="w-8 h-8 bg-[#587CC0] rounded-full relative flex justify-center">
                                                <span className="initial-name text-white self-center text-xs">
                                                    <div className="friend-picture relative flex h-full w-full justify-center items-center">
                                                        <UserGroupIcon classValue={userClassValue} />
                                                    </div>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="friend-info flex flex-col me-3 text-left text-sm">
                                            <span className="friend-name text-white">
                                                {chatGroupItem.groupName}
                                            </span>
                                            <span className="friend-notifications h-8 text-[#B9B9B9] mt-1 text-xs whitespace-normal text-wrap text-ellipsis overflow-hidden">
                                                <span className="text-[#928BD9]">#{chatGroupItem.username}: </span>
                                                {chatGroupItem.message}
                                            </span>
                                        </div>
                                        <div
                                            className="navigation-item transition ease-in-out">
                                            {chatGroupItem.messageQuantity ? <div
                                                className="news-chat flex items-center justify-center text-[.6rem] font-bold text-white p-1 bg-[#628BD9] min-w-7 max-w-8 min-h-6 max-h-7 rounded-xl border-[1px] border-t-[#432792] border-e-[#432792] border-b-[#D8A136] border-s-[#D8A136]">
                                                {!(chatGroupItem.messageQuantity > 999) ? chatGroupItem.messageQuantity : "999+"}
                                            </div> : null}
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>

                    <div className="create-chat flex items-end justify-end p-3 basis-18 shrink ">
                        <div className="w-9 h-9 flex items-center justify-center text-lg text-[#55ED6E] rounded-full bg-[#404251] bg-gradient-to-r from-[#202128] to-[#404251] cursor-pointer border-2 border-[#3B3D47] shadow-black shadow-md">+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}