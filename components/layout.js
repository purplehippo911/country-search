import { useState } from 'react';
import { BsFillMoonFill, BsMoon } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLightMode, setIsLightMode] = useState(true);

    function ToggleDarkMode() {
        document.body.classList.toggle("dark")

        if(document.body.className === "dark") {
            setIsDarkMode(true);
            setIsLightMode(false);
        } else { 
            setIsDarkMode(false);
            setIsLightMode(true);
        }
    }

    return ( 
        <div className="content">
            <nav className="bg-White text-LightText shadow-md dark:bg-DarkBlue bg:text-White p-10 m-auto mb-10">
                <div className="container flex items-center justify-center align m-auto">
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-LightText hover:text-DarkGray dark:text-White dark:hover:text-LightText">Where in the world?</h1>
                    </Link>
                    <picture 
                    className="flex items-center gap-3 ml-auto cursor-pointer"
                    onClick={() => ToggleDarkMode()}>
                        { isLightMode && <BsMoon /> }
                        { isDarkMode && <BsFillMoonFill className='fill-White hover:fill-LightText' />}
                        <span className='text-xl text-LightText hover:text-DarkGray dark:text-White dark:hover:text-LightText'>Dark Mode</span>
                    </picture>
                </div>
            </nav>

            {children}

            <footer className='bg-White text-LightText shadow-md dark:bg-DarkBlue bg:text-White p-10 m-auto mt-4'>
                <div className="container flex flex-col items-center justify-center align m-auto">
                    <Link href="/" className="justify-self-center">
                            <h2 className="text-2xl font-bold text-LightText hover:text-DarkGray dark:text-White dark:hover:text-LightText">Where in the world?</h2>
                    </Link>

                    <section className="flex flex-col jusitfy-center items-center text-center">
                            <a href="https://purplehipposwebsite.netlify.app"
                                className="justify-self-center flex flex-col"
                            >
                                <h3 className="text-md text-LightText font-bold">
                                    An app made by <strong className="text-purple-500 hover:text-purple-300">Purplehippo911</strong>
                                </h3>

                                <Image
                                    src="/profilePicture.bmp"
                                    alt="My profile picture"
                                    width={200}
                                    height={200}
                                    className="justify-self-center"

                                />
                            </a>
                    </section>
                </div>
            </footer>
        </div>
     );
}
 
export default Layout;