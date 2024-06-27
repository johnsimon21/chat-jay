import { getInitialLettersOfName } from "../../Utils/Connections"
import { FriendsConnections } from "../../interfaces/Connections"
import "./index.css"

export default function Connections() {
    const friends: FriendsConnections[] = [
        {
            username: "Miguel Del Castilio",
            profission: "Contabilista"
        },
        {
            username: "King Dacis",
            profission: "Back-end Developer"
        },
        {
            username: "Mauro Twister",
            profission: "Front-end Developer"
        },
        {
            username: "Miguel Deep",
            profission: "Full-stack Developer"
        },
        {
            username: "Abílio Bota Félix",
            profission: "Back-end Developer"
        },
        {
            username: "Nanga",
            profission: "Front-end Developer"
        },
        {
            username: "Ângelo Domingos",
            profission: "Front-end Developer"
        },
        {
            username: "João Beto",
            profission: "Front-end Developer"
        },
    ]


    return (
        <div className="friends-connection w-[405px] min-w-[405px] max-w-[27%] max-h-[73%] bg-[#2B2D38] text-center rounded-3xl mt-4 fixed top-[200px]">
            <div className="title-connection bg-[#2B2D38] w-[405px] text-white font-bold rounded-t-3xl p-4 fixed z-10">
                Minhas Conexões
            </div>
            <ul className="flex flex-col mt-14">
                {friends.map((friend, index) => (
                    <li key={index} className="flex basis-full cursor-pointer items-center py-3 hover:bg-[#3B3D4A]">
                        <div className="friend-profile px-6">
                            <div className="w-10 h-10 bg-[#587CC0] rounded-full relative flex justify-center">
                                <div className="w-2 h-2 bg-[#55ED6E] rounded-full absolute right-1"></div>
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