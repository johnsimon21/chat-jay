import UserStatus from "../../components/UserStatus";
import profilePicture from "../../assets/profile.jpg"
import settingsIcon from "../../assets/settings.svg"
import notificationsIcon from "../../assets/notifications.svg"
import { useState } from "react";
import { HomeIcon } from "../../components/svg/Home";
import { NotificationIcon } from "../../components/svg/Notification";
import { VideoCallIcon } from "../../components/svg/VideoCall";
import { VoiceCallIcon } from "../../components/svg/VoiceCall";
import { SettingsIcon } from "../../components/svg/Settings";
import { UsersIcon } from "../../components/svg/User";
import { SearchIcon } from "../../components/svg/Search";
import { FriendsActive, FriendMassage, ChatGroup } from "../../interfaces/global";
import "./Chat.css"



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
    const myID = "aaa1"
    const friendID = "aaa2"

    const friendsMessages: FriendMassage[] = [
        {
            id: "aaa2",
            username: "Miguel Del Castilio",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa1",
            username: "King Dacis",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa1",
            username: "Mauro Twister",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa2",
            username: "Miguel Deep",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa2",
            username: "Abílio Bota Félix",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa1",
            username: "Nanga",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa1",
            username: "Ângelo Domingos",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: false
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: false
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router",
            sentTime: "01/07/2024",
            status: false
        },
        {
            id: "aaa2",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: false
        },
        {
            id: "aaa1",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: false
        },
    ]
    const chatGroup: ChatGroup[] = [
        {
            id: "aaa1",
            username: "Miguel Del Castilio",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa2",
            username: "King Dacis",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa3",
            username: "Mauro Twister",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa4",
            username: "Miguel Deep",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa5",
            username: "Abílio Bota Félix",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa6",
            username: "Nanga",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: true
        },
        {
            id: "aaa7",
            username: "Ângelo Domingos",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: false
        },
        {
            id: "aaa8",
            username: "João Beto",
            message: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            sentTime: "01/07/2024",
            status: false
        },
    ]

    const [showNotifications, setShowNotification] = useState<boolean>(true)
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


    const classValue = "w-[17px] fill-[#ACB7F8]"
    const userClassValue = "w-[25px] fill-[#BEBEC0]"
    const friendMessageClass = "bg-[#3D4051] rounded-b-xl rounded-r-xl text-sm self-start mb-5 w-fit max-w-[60%] px-5 pt-[10px] pb-5"
    const MyMessageClass = "bg-[#645397] rounded-b-xl rounded-s-xl text-sm self-end mb-5 w-fit px-5 pt-[10px] pb-5"

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
                    <div className="user-call self-start z-10 flex w-56 h-12 px-2 bg-[#3E4153] rounded-r-2xl text-white">
                        <div className="friend-info flex items-center basis-full">
                            <div className="profile-picture  w-8 h-8 bg-indigo-500 rounded-full mb-1 relative">
                                <UserStatus userStatus={true} />
                                <img src={profilePicture} alt="imagem de perfil" className="w-full h-full rounded-full border border-indigo-500" />
                            </div>
                            <div className="username text-center text-xs text-white mx-2">
                                John Simon
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
                    </div>
                </div>

                <ul className="messages-reading absolute flex flex-col overflow-auto px-4 inset-x-0 inset-y-0 p-28">
                    {friendsMessages.map((friendMessage, messageIndex) => (
                        friendMessage.id === myID ? (
                            <li key={friendMessage.id} className="w-full flex flex-col">
                                <span className={MyMessageClass}>{friendMessage.message}</span>
                            </li>
                        ) : (
                            <li className={friendMessageClass}>{friendMessage.message}</li>
                        )
                    ))}
                </ul>
                <div className="grow flex items-end justify-center pe-3">
                    <div className="z-10 flex justify-center w-full h-24 px-2 bg-[#1F2029] text-white">
                        <div className="flex basis-[90%] items-center justify-center text-sm">
                            <button name="search-button" id="search-button" className={`text-white flex items-center justify-center w-16 h-14 rounded-s-xl bg-[#2B2D38]`} >
                                <SearchIcon classValue="w-5 fill-[#ACB7F8]" />
                            </button>

                            <button name="search-button" id="search-button" className={`text-white flex items-center justify-center w-10 h-14 bg-[#2B2D38]`} >
                                <SearchIcon classValue="w-5 fill-[#ACB7F8]" />
                            </button>

                            <input type="text" name="search" id="search" className=" w-full h-14 px-2 text-[#B4B4B5] bg-[#2B2D38] outline-none" placeholder="Escrever uma mensagem" />

                            <button className="send-message-button bg-[#2B2D38] rounded-e-xl text-white flex items-center justify-center w-16 h-14">
                                <SearchIcon classValue="w-5 fill-[#ACB7F8]" />
                            </button>
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