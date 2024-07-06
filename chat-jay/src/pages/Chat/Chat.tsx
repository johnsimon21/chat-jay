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
import { UsersIcon } from "../../components/svg/User";
import { SearchIcon } from "../../components/svg/Search";
import { FriendsActive, FriendMassage, ChatGroup, FormMessage, MyChat } from "../../interfaces/global";
import "./Chat.css"
import { AttachIcon } from "../../components/svg/Attach";
import { EmojisIcon } from "../../components/svg/Emojis";
import { SubmitHandler, useForm } from "react-hook-form";
import moment from "moment-timezone";



export default function Chat() {
    const friendsActive: FriendsActive[] = [
        {
            id: "aaa1",
            username: "Miguel Del Castilio",
            status: true
        },
        {
            id: "aaa2",
            username: "King Dacis",
            status: true
        },
        {
            id: "aaa3",
            username: "Mauro Twister",
            status: true
        },
        {
            id: "aaa4",
            username: "Miguel Deep",
            status: true
        },
        {
            id: "aaa5",
            username: "Abílio Bota Félix",
            status: true
        },
        {
            id: "aaa6",
            username: "Nanga",
            status: true
        },
        {
            id: "aaa7",
            username: "Ângelo Domingos",
            status: false
        },
        {
            id: "aaa8",
            username: "João Beto",
            status: false
        },
    ];

    const userInfo = { // this info comes from DB after login
        id: "aaa1",
        username: "Java Simon Script"
    }
    const friendInfo = { // this info comes from DB after login
        id: "aaa2",
        username: "Miguel Del Castilio",
        status: true
    }

    const friendsMessages: FriendMassage[] = [
        {
            id: "aaa2",
            username: "Miguel Del Castilio",
            message: "222-2 Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa1",
            username: "King Dacis",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa1",
            username: "Mauro Twister",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa2",
            username: "Miguel Deep",
            message: "2222 Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa2",
            username: "Abílio Bota Félix",
            message: "2222 Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa1",
            username: "Nanga",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa1",
            username: "Ângelo Domingos",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa2",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
    ]
    const chatGroup: ChatGroup[] = [
        {
            id: "aaa1",
            username: "Miguel Del Castilio",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa2",
            username: "King Dacis",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa3",
            username: "Mauro Twister",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa4",
            username: "Miguel Deep",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa5",
            username: "Abílio Bota Félix",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa6",
            username: "Nanga",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: true
        },
        {
            id: "aaa7",
            username: "Ângelo Domingos",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24",
            status: false
        },
        {
            id: "aaa8",
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
            sentTime: "2024-07-06 17:39:24"
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
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa2",
            username: "Miguel Deep",
            message: "2222 Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa2",
            username: "Abílio Bota Félix",
            message: "2222 Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
        },
        {
            id: "aaa1",
            username: "Nanga",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "2024-07-06 17:39:24"
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

    function handleMessageInput(event: ChangeEvent<HTMLInputElement>) {
        setInputMessageValue(event.target.value.trim());
    };
    const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm<FormMessage>();
    const [localTime, setLocalTime] = useState<string>('');
    const [message, setMessage] = useState<string>();
    const [timeZone, setTimeZone] = useState<string>('');
    const inputMessage = useRef<HTMLInputElement>(null);
    const lastElementRef = useRef<HTMLLIElement | null>(null);

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
        if (inputMessageValue !== '') {
            const time = getCurrentTime();
            console.log({ name: inputMessageValue, localTime: time });
            setLocalTime(time);
            const newMessgeChat = {
                id: userInfo.id,
                username: userInfo.username,
                message: inputMessageValue,
                sentTime: time
            }
            setMyChat(prevElements => [...prevElements, newMessgeChat]);
            handleScrollToLastElement()

            if (inputMessage.current) {
                inputMessage.current.value = '';
            }
            setInputMessageValue('')
        }
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
                        <img src={profilePicture} alt="imagem de perfil" className="w-full h-full rounded-full border border-indigo-500" />
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
                                <img src={profilePicture} alt="imagem de perfil" className="w-full h-full rounded-full border border-indigo-500" />
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
                        <div className="absolute top-[50px] right-4 bg-[#3E4153] min-w-16 rounded-b-xl text-center text-sm p-1">hoje</div>
                    </div>
                </div>

                <ul className="messages-reading absolute flex flex-col overflow-auto px-4 inset-x-0 top-0 inset-y-0 py-28 ">
                    {myChat.map((friendMessage, messageIndex) => (
                        messageIndex === myChat.length - 1 ? (
                            friendMessage.id === userInfo.id ? (
                                <li ref={lastElementRef} key={friendMessage.id} className="w-full flex flex-col">

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
                                <li ref={lastElementRef} key={friendMessage.id} className="w-full flex flex-col">
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
                                </li>
                            )
                        ) : (
                            friendMessage.id === userInfo.id ? (
                                <li key={friendMessage.id} className="w-full flex flex-col">

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
                                <li key={friendMessage.id} className="w-full flex flex-col">
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
                            <div id="emoji-button" className={`text-white flex items-center justify-center w-16 h-12 rounded-s-xl bg-[#2B2D38] hover:bg-[#383B4D] transition duration-300 ease-in-out`} >
                                <EmojisIcon classValue="w-6 fill-[#fff]" />
                            </div>

                            <div id="attach-button" className={`text-white flex items-center justify-center w-16 h-12 bg-[#2B2D38] hover:bg-[#383B4D] transition duration-300 ease-in-out`} >
                                <AttachIcon classValue="w-5 fill-[#fff]" />
                            </div>

                            <input
                                type="text"
                                id="message"
                                ref={inputMessage}
                                onChange={handleMessageInput}
                                onKeyDown={handleKeyPress}
                                className=" w-full min-h-12 px-2 text-[#B4B4B5] bg-[#2B2D38] outline-none" placeholder="Escrever uma mensagem" />

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
                                        <UsersIcon classValue={userClassValue} />
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
                                                <span className="initial-name text-white self-center text-xs">
                                                </span>
                                            </div>
                                        </div>

                                        <div className="friend-info flex flex-col me-3 text-left text-sm">
                                            <span className="friend-name text-white">
                                                {friendMessage.username}
                                            </span>
                                            <span className="friend-notifications h-8 text-[#B9B9B9] text-xs whitespace-normal text-wrap text-ellipsis overflow-hidden">
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
                                {chatGroup.map((chatGroupItem) => (
                                    <li
                                        key={chatGroupItem.id}
                                        onClick={() => handleViewedNotification(chatGroupItem.id)}
                                        className={handleNotificationClass(chatGroupItem.id)}
                                    >
                                        <div className="friend-profile ms-3 me-2">
                                            <div className="w-8 h-8 bg-[#587CC0] rounded-full relative flex justify-center">
                                                <UserStatus userStatus={chatGroupItem.status} />
                                                <span className="initial-name text-white self-center text-xs">
                                                </span>
                                            </div>
                                        </div>

                                        <div className="friend-info flex flex-col me-3 text-left text-sm">
                                            <span className="friend-name text-white">
                                                {chatGroupItem.username}
                                            </span>
                                            <span className="friend-notifications h-8 text-[#B9B9B9] text-xs whitespace-normal text-wrap text-ellipsis overflow-hidden">
                                                {chatGroupItem.message}
                                            </span>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>

                    <div className="create-chat flex items-end justify-end p-3 basis-20 shrink ">
                        <div className="w-9 h-9 flex items-center justify-center text-lg text-[#55ED6E] rounded-full bg-[#404251] bg-gradient-to-r from-[#202128] to-[#404251] cursor-pointer border-2 border-[#3B3D47] shadow-black shadow-md">+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}