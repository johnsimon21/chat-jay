
export default function UserStatus({ userStatus }: { userStatus: boolean | string }) {
    const statusClass =
        typeof userStatus === 'boolean' && userStatus
            ? 'w-[8px] h-[8px] bg-[#55ED6E] border-[1px] border-[#2B2D38] rounded-full absolute right-[2px] top-[1px]'
            : 'w-[8px] h-[8px] bg-[#6D73A0] border-[1px] border-[#2B2D38] rounded-full absolute right-[2px]';

    return <div className={statusClass}></div>;
}
