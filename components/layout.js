import { BsFillMoonFill } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs';
import Link from 'next/link';

const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <nav className="bg-DarkBlue text-White p-10 m-auto mb-10">
                <div className="container flex m-auto">
                    <Link href="/">
                        <h1 className="text-xl font-bold">Where in the world?</h1>
                    </Link>
                    <picture className="flex items-center gap-3 ml-auto cursor-pointer">
                        <BsFillMoonFill />
                        <span className='text-xl'>Dark Mode</span>
                    </picture>
                </div>
            </nav>
            {children}
        </div>
     );
}
 
export default Layout;