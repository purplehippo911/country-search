import { BsFillMoonFill, BsMoon } from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';

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
            <nav className="bg-White text-LightText dark:bg-DarkBlue bg:text-White p-10 m-auto mb-10">
                <div className="container flex items-center justify-center align m-auto">
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-LightText dark:text-White">Where in the world?</h1>
                    </Link>
                    <picture 
                    className="flex items-center gap-3 ml-auto cursor-pointer"
                    onClick={() => ToggleDarkMode()}>
                        { isLightMode && <BsMoon /> }
                        { isDarkMode && <BsFillMoonFill className='fill-White' />}
                        <span className='text-xl text-LightText dark:text-White'>Dark Mode</span>
                    </picture>
                </div>
            </nav>
            {children}
        </div>
     );
}
 
export default Layout;