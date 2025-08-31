// components/Navbar.js
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import Image from 'next/image';
import { MdMenu } from "react-icons/md";
import ProfilePic from '../../app/assists/Profile.png'
const Navbar = () => {
const navLink =<>
<Link href="/" > Home </Link>
<Link href="/" > Home </Link>
<Link href="/" > Home </Link>
<Link href="/" > Home </Link>
</>

    return (
        <div className="navbar fixed bg-base-100 shadow-sm">
            <div className="navbar-start">
               
                <Image className='w-12' src={ProfilePic} alt='বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয়' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <ThemeToggle />
                <a className="btn">Login</a>
                 <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="cursor-pointer lg:hidden">
                       <MdMenu size={35}/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1  gap-3 mt-14 w-48 p-2 shadow-2xl ">
                        {navLink}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;