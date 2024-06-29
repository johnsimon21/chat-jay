import { getInitialLettersOfName } from "../../Utils/Connections"
import UserStatus from "../../components/UserStatus"
import { FriendsConnections } from "../../interfaces/Connections"
import "./index.css"

export default function Connections() {
    const friends: FriendsConnections[] = [
        {
            username: "Miguel Del Castilio",
            profission: "Contabilista",
            status: true
        },
        {
            username: "King Dacis",
            profission: "Back-end Developer",
            status: true
        },
        {
            username: "Mauro Twister",
            profission: "Front-end Developer",
            status: true
        },
        {
            username: "Miguel Deep",
            profission: "Full-stack Developer",
            status: true
        },
        {
            username: "Abílio Bota Félix",
            profission: "Back-end Developer",
            status: true
        },
        {
            username: "Nanga",
            profission: "Front-end Developer",
            status: true
        },
        {
            username: "Ângelo Domingos",
            profission: "Front-end Developer",
            status: false
        },
        {
            username: "João Beto",
            profission: "Front-end Developer",
            status: false
        },
    ]


    return (
        <div className="friends-connection transition-costumized w-[405px] min-w-[405px] max-w-[27%] max-h-[70%] bg-[#2B2D38] text-center rounded-xl fixed ">
            <div className="title-connection transition-costumized bg-[#2B2D38] w-[405px] text-white font-bold rounded-t-3xl p-4 fixed z-10">
                Minhas Conexões
            </div>
            <ul className="flex flex-col mt-14">
                {friends.map((friend, index) => (
                    <li key={index} className="flex basis-full cursor-pointer items-center py-3 hover:bg-[#3B3D4A]">
                        <div className="friend-profile px-6">
                            <div className="w-10 h-10 bg-[#587CC0] rounded-full relative flex justify-center">
                               <UserStatus userStatus={friend.status}/>
                                <span className="initial-name text-white self-center">
                                    {getInitialLettersOfName(friend.username)}
                                </span>
                            </div>
                        </div>

                        <div className="friend-info flex flex-col text-left">
                            <span className="friend-name text-white">
                                {friend.username}
                            </span>
                            <span className="friend-profission text-[#B9B9B9] text-sm">
                                {friend.profission}
                            </span>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
}