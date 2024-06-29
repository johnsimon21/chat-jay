import profilePicture from "../../assets/profile.jpg"
import UserStatus from "../../components/UserStatus"
import { Link } from "react-router-dom";

export default function Navbar({ displayNotifications, setDisplayNotifications, notifications }: { displayNotifications: boolean, setDisplayNotifications: React.Dispatch<React.SetStateAction<boolean>>, notifications: boolean }) {

    const chat = 100;
    const news = 1;

    const handleNotificationsVisibility = () => {
        if (notifications) {
            setDisplayNotifications(false);
        } else {
            setDisplayNotifications(true);
        }
    }
    return (
        <div className="bg-[#181921] w-full h-[200px] flex flex-col px-4 fixed top-0 z-50">
            <div className="flex w-full h-20">
                {/* Logo section*/}
                <div className=" text-2xl text-white font-bold flex-none flex justify-start items-center w-48">Chat-Jay</div>

                {/* Navigation bar section*/}
                <div className="flex flex flex-1 text-[#A8A8A8] justify-center">
                    <Link to="/" className="navigation-item transition ease-in-out nav-item-active w-[120px] h-fit pt-[20px] pb-2 cursor-pointer text-center">
                        Home
                    </Link>
                    <Link to="/chat" className="navigation-item transition ease-in-out w-[120px] h-fit pt-[20px] pb-2 cursor-pointer hover:text-[#9270F2] text-center relative">
                        <div>Chat</div>
                        {chat ? <div className="news-chat absolute top-4 right-2 text-[.7rem] text-white text-center bg-[#628BD9] min-w-8 max-w-9 rounded-xl border-[1px] border-t-[#432792] border-e-[#432792] border-b-[#D8A136] border-s-[#D8A136]">
                            {!(chat > 99) ? chat : "+99"}
                        </div> : null}

                    </Link>
                    <div
                        onClick={() => handleNotificationsVisibility()}
                        className="navigation-item transition ease-in-out w-[120px] h-fit pt-[20px] pb-2 cursor-pointer hover:text-[#9270F2] text-center relative">
                        <div>Notificações</div>
                        {news ? <div className="news-chat absolute top-4 right-[-12px] text-[.7rem] text-white text-center bg-[#628BD9] min-w-8 max-w-9 rounded-xl border-[1px] border-t-[#432792] border-e-[#432792] border-b-[#D8A136] border-s-[#D8A136]">
                            {!(news > 99) ? news : "+99"}
                        </div> : null}
                    </div>
                </div>

                {/* Profile section */}
                <div className="text-white flex flex-none w-48 items-center justify-end">
                    <div className="flex flex-col text-right me-1">
                        <span className="username">John Simon</span>
                        <span className="profission text-[#B9B9B9] text-sm">Full-stack Developer</span>
                    </div>

                    <div className="px-1">
                        <div className="w-10 h-10 bg-gray-400 rounded-full relative">
                            <UserStatus userStatus={true} />
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