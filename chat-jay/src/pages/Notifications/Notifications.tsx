import { useState } from "react"
import { getInitialLettersOfName } from "../../Utils/Connections"
import UserStatus from "../../components/UserStatus"

export default function Notifications({ displayNotifications }: { displayNotifications: boolean }) {
    const friends: any = [
        {
            id: "aaa1",
            username: "Miguel Del Castilio",
            notifications: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi, Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            status: true
        },
        {
            id: "aaa2",
            username: "King Dacis",
            notifications: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            status: true
        },
        {
            id: "aaa3",
            username: "Mauro Twister",
            notifications: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            status: true
        },
        {
            id: "aaa4",
            username: "Miguel Deep",
            notifications: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            status: true
        },
        {
            id: "aaa5",
            username: "Abílio Bota Félix",
            notifications: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            status: true
        },
        {
            id: "aaa6",
            username: "Nanga",
            notifications: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            status: true
        },
        {
            id: "aaa7",
            username: "Ângelo Domingos",
            notifications: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            status: false
        },
        {
            id: "aaa8",
            username: "João Beto",
            notifications: "Rever os cabos de rede, o modem e o router, ligar novamente à rede Wi-Fi",
            status: false
        },
    ]
    const [showNotifications, setShowNotification] = useState<boolean>(displayNotifications)
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
        let newNotificationClass = "flex basis-full cursor-pointer items-center py-3 hover:bg-[#3B3D4A]";;
        if (notViewedNotification.some(notification => notification.id === id)) {
            newNotificationClass = "flex basis-full cursor-pointer items-center py-3 hover:bg-[#3B3D4A] bg-[#19171aa8]"
            console.log(newNotificationClass)
        }

        return newNotificationClass
    }

    function handleShowNotifications() {
        if (showNotifications) {
            setShowNotification(false)
            console.log(showNotifications)
        }
    }


    return (
        <>
            {
                displayNotifications ? (
                    <div className="w-[310px] bg-[#2B2D38] transition-costumized text-center rounded-xl fixed right-5 max-h-[70%] overflow-hidden">
                        <div className="bg-[#2B2D38] w-[310px] text-white font-bold rounded-t-3xl p-4 fixed z-10">
                            Notificações
                            {/* <div
                                onClick={() => handleShowNotifications()}
                                className="absolute font-normal cursor-pointer right-4 top-1">
                                x
                            </div> */}
                        </div>
                        <ul className="flex flex-col mt-14">
                            {friends.map((friend: any) => (
                                <li
                                    key={friend.id}
                                    onClick={() => handleViewedNotification(friend.id)}
                                    className={handleNotificationClass(friend.id)}>
                                    <div className="friend-profile ms-3 me-2">
                                        <div className="w-8 h-8 bg-[#587CC0] rounded-full relative flex justify-center">
                                            <UserStatus userStatus={friend.status} />
                                            <span className="initial-name text-white self-center text-xs">
                                                {getInitialLettersOfName(friend.username)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="friend-info flex flex-col me-3 text-left text-sm">
                                        <span className="friend-name text-white">
                                            {friend.username}
                                        </span>
                                        <span className="friend-notifications h-8 text-[#B9B9B9] text-xs whitespace-normal text-wrap text-ellipsis overflow-hidden">
                                            {friend.notifications}
                                        </span>
                                    </div>
                                </li>
                            ))}

                        </ul>
                    </div>
                ) : (
                    <div className="w-0 bg-[#2B2D38] transition-costumized text-center rounded-xl fixed right-5 max-h-[70%] overflow-hidden">
                     
                    </div>
                )
            }
        </>
    )
}