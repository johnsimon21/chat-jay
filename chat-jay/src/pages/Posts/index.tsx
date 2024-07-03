import { getInitialLettersOfName } from "../../Utils/Connections"
import profilePicture from "../../assets/profile-before-removebg (1).png"
import likeIcon from "../../assets/love.svg"
import messageIcon from "../../assets/message.svg"
import './indes.css'

import { Post } from "../../interfaces/Post"
import UserStatus from "../../components/UserStatus"

export default function Posts({ notificationsOpened }: { notificationsOpened: boolean }) {
    const posts: Post[] = [
        {
            username: "Miguel Del Castilio",
            profilePicture: "../../assets/profile-before-removebg (1).png",
            time: "2 minutos",
            content: "Olá minha rede, hoje estou navegando no <<Chat-Jay>> e até agora estou adorando a experiência, é simples e muito atrativo vamos a isso🥳✊🏻✊🏻Aí está o Devsenvolvedor do <<Chat-Jay>> 👇🏻",
            postPicture: "../../assets/profile-before-removebg (1).png",
            userStatus: false
        },
        {
            username: "King Dacis",
            profilePicture: "../../assets/profile-before-removebg (1).png",
            time: "2 minutos",
            content: "Olá minha rede, hoje estou navegando no <<Chat-Jay>> e até agora estou adorando a experiência, é simples e muito atrativo vamos a isso🥳✊🏻✊🏻Aí está o Devsenvolvedor do <<Chat-Jay>> 👇🏻",
            postPicture: "../../assets/profile-before-removebg (1).png",
            userStatus: true
        },
        {
            username: "Mauro Twister",
            profilePicture: "../../assets/profile-before-removebg (1).png",
            time: "2 minutos",
            content: "Olá minha rede, hoje estou navegando no <<Chat-Jay>> e até agora estou adorando a experiência, é simples e muito atrativo vamos a isso🥳✊🏻✊🏻Aí está o Devsenvolvedor do <<Chat-Jay>> 👇🏻",
            postPicture: "../../assets/profile-before-removebg (1).png",
            userStatus: true
        },
        {
            username: "Miguel Deep",
            profilePicture: "../../assets/profile-before-removebg (1).png",
            time: "2 minutos",
            content: "Olá minha rede, hoje estou navegando no <<Chat-Jay>> e até agora estou adorando a experiência, é simples e muito atrativo vamos a isso🥳✊🏻✊🏻Aí está o Devsenvolvedor do <<Chat-Jay>> 👇🏻",
            postPicture: "../../assets/profile-before-removebg (1).png",
            userStatus: ""
        },
        {
            username: "Abílio Bota Félix",
            profilePicture: "../../assets/profile-before-removebg (1).png",
            time: "2 minutos",
            content: "Olá minha rede, hoje estou navegando no <<Chat-Jay>> e até agora estou adorando a experiência, é simples e muito atrativo vamos a isso🥳✊🏻✊🏻Aí está o Devsenvolvedor do <<Chat-Jay>> 👇🏻",
            postPicture: "../../assets/profile-before-removebg (1).png",
            userStatus: false
        },
        {
            username: "Nanga",
            profilePicture: "../../assets/profile-before-removebg (1).png",
            time: "2 minutos",
            content: "Olá minha rede, hoje estou navegando no <<Chat-Jay>> e até agora estou adorando a experiência, é simples e muito atrativo vamos a isso🥳✊🏻✊🏻Aí está o Devsenvolvedor do <<Chat-Jay>> 👇🏻",
            postPicture: "../../assets/profile-before-removebg (1).png",
            userStatus: true
        },
    ]

    return (
        <ul className={notificationsOpened ? "posts-cards transition-costumized flex flex-col w-full me-350" : "posts-cards flex flex-col w-full"}>
            {posts.map((post, index) => (
                <div className="w-full bg-[#2B2D38] mb-4 text-center max-h-[580px] rounded-3xl">
                    <li key={index} className="flex flex-col basis-full max-h-[100%] py-3">

                        <div className="flex">
                            <div className="flex flex-1 items-start">
                                <div className="friend-profile ps-6 pe-4">
                                    <div className="w-10 h-10 bg-[#587CC0] rounded-full relative flex justify-center">
                                        <UserStatus userStatus={post.userStatus} />
                                        <span className="initial-name text-white self-center">
                                            {getInitialLettersOfName(post.username)}
                                        </span>
                                    </div>
                                </div>

                                <div className="friend-info flex flex-col text-left">
                                    <span className="friend-name text-white mt-1">
                                        {post.username}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-none self-center basis-20 mx-6 text-[#B9B9B9] text-sm">
                                {post.time}
                            </div>
                        </div>

                        {/* Post Content */}
                        <div className="post-content text-[#B9B9B9] text-sm py-4 ps-8 pe-6  text-left">
                            {post.content}
                        </div>

                        {/* Post media */}
                        <div className="post-media h-[350px] px-6">
                            <img src={profilePicture} alt="Post Image" className="post-image rounded-3xl  h-full" />
                        </div>

                        <div className="post-buttons flex py-6 ps-10 my-7">
                            <div className="live costum-button cursor-pointer w-[35px] h-[35px] rounded-full flex justify-center">
                                <img src={likeIcon} alt="love icon" className="w-5" />
                            </div>
                            <div className="message costum-button cursor-pointer w-[35px] h-[35px] ms-8 rounded-full flex justify-center">
                                <img src={messageIcon} alt="message icon" className="w-4 me-[2px] mb-[3px]" />
                            </div>
                        </div>

                    </li>
                </div>
            ))}
        </ul>
    )
}