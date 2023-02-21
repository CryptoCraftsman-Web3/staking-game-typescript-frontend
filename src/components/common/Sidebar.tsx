import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import { useEffect } from 'react';
type Props = {
    onCloseSidebar: () => void,
    openSideBar: boolean
};

const routes = [
    {
        id: 1,
        href: "/dashboard",
        title: "Planning Board"
    },
    {
        id: 2,
        href: "/account",
        title: "Crew"
    },
    {
        id: 3,
        href: "/swap",
        title: "Black Market"
    },
    {
        id: 4,
        href: "/stashhouse",
        title: "Stash House"
    },

]

const Sidebar = (props: Props) => {
    let location = useLocation();

    return (
        <>
            <div className={clsx(
                "bg-darky mt-20 text-white flex lg:hidden flex-1 fixed h-full z-40  ease-in-out duration-300 top-0 left-0 ",
                props.openSideBar ? "translate-x-0" : "-translate-x-72",

            )}>
                <div className="flex bg-darky opacity-75 overflow-auto z-50 lg:z-0 lg:flex h-screen fixed w-72 py-12 justify-between items-center flex-col shadow-2xl">
                    <div className="text-white flex flex-col items-center gap-4 w-4/5 font-medium">
                        <img
                            src="/images/logo.svg"
                            alt='logo'
                            className="w-1/3 lg:w-fit"
                        />
                        {
                            routes.map((route, index) => {
                                return (
                                    <Link
                                        key={route.id}
                                        className={
                                            clsx(
                                                "opacity-90 hover:opacity-100  z-10 relative py-2 w-full text-center ",
                                                styles.Sidebar_navLink,
                                                location.pathname.includes(route.href) ? styles.Sidebar_active : ""
                                            )
                                        }
                                        to={route.href}
                                    >
                                        {route.title}
                                    </Link>
                                )
                            })
                        }
                        <button className="Sidebar_navLink__NcT0W hover:opacity-100  opacity-50 z-10 relative px-12 py-2 lg:hidden">
                            Connect Wallet
                        </button>
                    </div>

                    <div className="flex gap-4 w-4/5 justify-center">
                        <a
                            href="https://twitter.com/BanditProject_"
                            target="_blank"
                            rel='noopener'
                            style={{
                                border: "1px solid #ed80fd"
                            }}
                            className="p-2  w-10 h-10 opacity-50 hover:opacity-100 rounded-full text-white border border-pinky flex items-center justify-center transition-all duration-150 cursor-pointer text-sm"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="twitter"
                                className="svg-inline--fa fa-twitter "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="https://discord.gg/KVCvm9btT3"
                            target="_blank"
                            rel='noopener'
                            style={{
                                border: "1px solid #ed80fd"
                            }}
                            className="p-2  w-10 h-10 opacity-50 hover:opacity-100 rounded-full text-white border border-pinky flex items-center justify-center transition-all duration-150 cursor-pointer text-sm"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="discord"
                                className="svg-inline--fa fa-discord "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="https://medium.com/@thebanditproject"
                            target="_blank"
                            rel='noopener'
                            style={{
                                border: "1px solid #ed80fd"
                            }}
                            className="p-2  w-10 h-10 opacity-50 hover:opacity-100 rounded-full text-white border border-pinky flex items-center justify-center transition-all duration-150 cursor-pointer text-sm"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="medium"
                                className="svg-inline--fa fa-medium "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M180.5 74.26C80.81 74.26 0 155.6 0 256S80.82 437.7 180.5 437.7 361 356.4 361 256 280.2 74.26 180.5 74.26zm288.3 10.65c-49.85 0-90.25 76.62-90.25 171.1s40.41 171.1 90.25 171.1 90.25-76.62 90.25-171.1H559C559 161.5 518.6 84.91 468.8 84.91zm139.5 17.82c-17.53 0-31.74 68.63-31.74 153.3s14.2 153.3 31.74 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="https://t.me/thebanditproject"
                            target="_blank"
                            rel='noopener'
                            style={{
                                border: "1px solid #ed80fd"
                            }}
                            className="p-2  w-10 h-10 opacity-50 hover:opacity-100 rounded-full text-white border border-pinky flex items-center justify-center transition-all duration-150 cursor-pointer text-sm"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="telegram"
                                className="svg-inline--fa fa-telegram "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M248 8C111 8 0 119 0 256S111 504 248 504 496 392.1 496 256 384.1 8 248 8zM362.1 176.7c-3.732 39.22-19.88 134.4-28.1 178.3-3.476 18.58-10.32 24.82-16.95 25.42-14.4 1.326-25.34-9.517-39.29-18.66-21.83-14.31-34.16-23.22-55.35-37.18-24.49-16.14-8.612-25 5.342-39.5 3.652-3.793 67.11-61.51 68.33-66.75 .153-.655 .3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283 .746-104.6 69.14-14.85 10.19-26.89 9.934c-8.855-.191-25.89-5.006-38.55-9.123-15.53-5.048-27.88-7.717-26.8-16.29q.84-6.7 18.45-13.7 108.4-47.25 144.6-62.3c68.87-28.65 83.18-33.62 92.51-33.79 2.052-.034 6.639 .474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716A43.76 43.76 0 0 1 362.1 176.7z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div >
                <div className={clsx(
                    "hidden lg:flex w-1/5  text-white ",
                    "bg-black mt-20 lg:mt-0 flex fixed h-full z-40  ease-in-out duration-300 top-0 left-0 "
                )}>
                    <div className="flex opacity-95 overflow-auto z-50 lg:z-0 lg:flex w-full py-12 justify-between items-center flex-col bg-darky shadow-2xl">
                        <div className="text-white flex flex-col items-center gap-4 w-4/5 font-medium">
                            <img
                                src="/images/logo.svg"
                                alt='logo'
                                className="w-1/3 lg:w-fit"
                            />
                            {
                                routes.map((route, index) => {
                                    return (
                                        <Link
                                            key={route.id}
                                            className={
                                                clsx(
                                                    "opacity-90 hover:opacity-100  z-10 relative py-2 w-full text-center ",
                                                    styles.Sidebar_navLink,
                                                    location.pathname.includes(route.href) ? styles.Sidebar_active : ""
                                                )
                                            }
                                            to={route.href}
                                        >
                                            {route.title}
                                        </Link>
                                    )
                                })
                            }
                            <button className="Sidebar_navLink__NcT0W hover:opacity-100  opacity-50 z-10 relative px-12 py-2 lg:hidden">
                                Connect Wallet
                            </button>
                        </div>

                        <div className="flex gap-4 w-4/5 justify-center">
                            <a
                                href="https://twitter.com/BanditProject_"
                                target="_blank"
                                rel='noopener'
                                style={{
                                    border: "1px solid #ed80fd"
                                }}
                                className="p-2  w-10 h-10 opacity-50 hover:opacity-100 rounded-full text-white border border-pinky flex items-center justify-center transition-all duration-150 cursor-pointer text-sm"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="twitter"
                                    className="svg-inline--fa fa-twitter "
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="https://discord.gg/KVCvm9btT3"
                                target="_blank"
                                rel='noopener'
                                style={{
                                    border: "1px solid #ed80fd"
                                }}
                                className="p-2  w-10 h-10 opacity-50 hover:opacity-100 rounded-full text-white border border-pinky flex items-center justify-center transition-all duration-150 cursor-pointer text-sm"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="discord"
                                    className="svg-inline--fa fa-discord "
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="https://medium.com/@thebanditproject"
                                target="_blank"
                                rel='noopener'
                                style={{
                                    border: "1px solid #ed80fd"
                                }}
                                className="p-2  w-10 h-10 opacity-50 hover:opacity-100 rounded-full text-white border border-pinky flex items-center justify-center transition-all duration-150 cursor-pointer text-sm"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="medium"
                                    className="svg-inline--fa fa-medium "
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M180.5 74.26C80.81 74.26 0 155.6 0 256S80.82 437.7 180.5 437.7 361 356.4 361 256 280.2 74.26 180.5 74.26zm288.3 10.65c-49.85 0-90.25 76.62-90.25 171.1s40.41 171.1 90.25 171.1 90.25-76.62 90.25-171.1H559C559 161.5 518.6 84.91 468.8 84.91zm139.5 17.82c-17.53 0-31.74 68.63-31.74 153.3s14.2 153.3 31.74 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="https://t.me/thebanditproject"
                                target="_blank"
                                rel='noopener'
                                style={{
                                    border: "1px solid #ed80fd"
                                }}
                                className="p-2  w-10 h-10 opacity-50 hover:opacity-100 rounded-full text-white border border-pinky flex items-center justify-center transition-all duration-150 cursor-pointer text-sm"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="telegram"
                                    className="svg-inline--fa fa-telegram "
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M248 8C111 8 0 119 0 256S111 504 248 504 496 392.1 496 256 384.1 8 248 8zM362.1 176.7c-3.732 39.22-19.88 134.4-28.1 178.3-3.476 18.58-10.32 24.82-16.95 25.42-14.4 1.326-25.34-9.517-39.29-18.66-21.83-14.31-34.16-23.22-55.35-37.18-24.49-16.14-8.612-25 5.342-39.5 3.652-3.793 67.11-61.51 68.33-66.75 .153-.655 .3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283 .746-104.6 69.14-14.85 10.19-26.89 9.934c-8.855-.191-25.89-5.006-38.55-9.123-15.53-5.048-27.88-7.717-26.8-16.29q.84-6.7 18.45-13.7 108.4-47.25 144.6-62.3c68.87-28.65 83.18-33.62 92.51-33.79 2.052-.034 6.639 .474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716A43.76 43.76 0 0 1 362.1 176.7z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Sidebar;
