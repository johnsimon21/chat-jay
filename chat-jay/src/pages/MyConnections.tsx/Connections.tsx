import { getInitialLettersOfName } from "../../Utils/Connections"
import { FriendsConnections } from "../../interfaces/Connections"

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
    ]

    return (
        <div className="w-[405px] min-h-full bg-[#2B2D38] text-center rounded-3xl">
            <div className="title-connection text-white font-bold p-4">Minhas Conexões</div>
            <ul className="flex flex-col">
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