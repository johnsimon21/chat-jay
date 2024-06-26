import profilePicture from "../../assets/profile-before-removebg (1).png"
export default function Navbar() {
    return (
        <div className="bg-[#181921] w-full h-[230px] flex flex-col px-4">
            <div className="flex w-full h-20">
                {/* Logo section*/}
                <div className=" text-2xl text-white font-bold flex-none flex justify-start items-center w-48">Chat-Jay</div>

                {/* Navigation bar section*/}
                <div className="flex flex flex-1 text-[#A8A8A8] justify-center">
                    <div className="navigation-item nav-item-active w-[120px] pt-[20px] pb-0 cursor-pointer text-center">Home</div>
                    <div className="navigation-item w-[120px] pt-[20px] pb-0 cursor-pointer text-center">Chat</div>
                    <div className="navigation-item w-[120px] pt-[20px] pb-0 cursor-pointer text-center">Notifications</div>
                </div>

                {/* Profile section */}
                <div className="text-white flex flex-none w-48 items-center">
                    <div className="flex flex-col text-right">
                        <span className="username">John Simon</span>
                        <span className="profission text-[#B9B9B9]">Full-stack Developer</span>
                    </div>

                    <div className="px-1">
                        <div className="w-10 h-10 bg-gray-400 rounded-full relative">
                            <div className="w-2 h-2 bg-[#55ED6E] rounded-full absolute right-1"></div>
                            <img src={profilePicture} alt="imagem de perfil" className="w-full h-full rounded-full border border-indigo-500" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grow flex">
                <div className="greeting text-white font-bold text-4xl self-end pb-5">Bom dia, John</div>
            </div>
        </div>
    )
}