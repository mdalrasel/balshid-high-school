'use client';

import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';

// Import necessary icons from react-icons/md
import { MdMenu, MdHome, MdNotifications, MdCreate, MdVideoLibrary, MdDashboard, MdPhotoLibrary, MdContacts, MdBarChart, MdLocalLibrary, MdLogin, MdLogout, MdPerson } from "react-icons/md";

// Assuming you have these image paths correct
import ProfilePic from '../../app/assists/Profile.png';
import Banner1 from '../../app/assists/balshid high school banner.jpeg';
import NoticeMarquee from '../NoticeMarquee';

const Navbar = () => {
    const { user, loading, logout } = useAuth();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Define all navigation links with icons and paths
    const navLinks = [
        { name: 'হোম', path: '/', icon: <MdHome size={20} /> },
        { name: 'নোটিশ', path: '/notices', icon: <MdNotifications size={20} /> },
        { name: 'গ্যালারি', path: '/gallery', icon: <MdPhotoLibrary size={20} /> },
        { name: 'লাইব্রেরি', path: '/library', icon: <MdLocalLibrary size={20} /> },
        { name: 'যোগাযোগ', path: '/contact', icon: <MdContacts size={20} /> },
        { name: 'বোর্ড রেজাল্ট', path: '/board-result', icon: <MdBarChart size={20} /> },
    ];

    // Handle logout action
    const handleLogout = () => {
        logout();
        router.push('/');
    };

    if (loading) {
        return null; // Or a loading spinner
    }

    return (
        <>
            {/* Banner Section */}
            <div className="w-full">
                <Image className='w-full object-cover ' src={Banner1} alt='বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয়' />
            </div>

            {/* Navbar with sticky positioning */}
            <div className='sticky top-0 z-50'>
                <nav className="navbar bg-base-100 shadow-sm">
                    {/* Navbar Start Section */}
                    <div className="navbar-start">
                        <Link href="/">
                            <Image className='w-12 h-12 rounded-full object-cover' src={ProfilePic} alt='বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয়' />
                        </Link>
                    </div>

                    {/* Navbar Center (Desktop Links) */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link href={link.path} className="flex items-center gap-2 px-2 py-1 hover:text-blue-500 transition-colors duration-300">
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            {user && (
                                <li>
                                    <Link href="/dashboard" className="flex items-center gap-2 px-2 py-1 hover:text-blue-500 transition-colors duration-300">
                                        <MdDashboard size={20} />
                                        ড্যাশবোর্ড
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Navbar End Section */}
                    <div className="navbar-end gap-4">
                        <ThemeToggle />
                        {!user ? (
                            <Link href="/login" className="btn btn-primary hidden lg:flex">লগইন</Link>
                        ) : (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {/* Replace with actual user profile image */}
                                        <Image src={ProfilePic} alt="User Profile" width={40} height={40} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <p className="justify-between text-gray-700 dark:text-gray-200">
                                            {user.name}
                                        </p>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/profile" className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                                            <MdPerson size={20} />
                                            প্রোফাইল আপডেট
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                                            <MdLogout size={20} />
                                            লগআউট
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                       

                        {/* Mobile Dropdown Menu */}
                        <div className="dropdown dropdown-left lg:hidden">
                            <div tabIndex={0} role="button" className="cursor-pointer">
                                <MdMenu size={35} />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] gap-3 mt-14 w-48 p-2 shadow-2xl">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link href={link.path} className="flex items-center gap-2 px-2 py-1 hover:text-blue-500 transition-colors duration-300">
                                            {link.icon}
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                                {user && (
                                    <>
                                        <li>
                                            <Link href="/dashboard" className="flex items-center gap-2 px-2 py-1 hover:text-blue-500 transition-colors duration-300">
                                                <MdDashboard size={20} />
                                                ড্যাশবোর্ড
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/profile" className="flex items-center gap-2 px-2 py-1 hover:text-blue-500 transition-colors duration-300">
                                                <MdPerson size={20} />
                                                প্রোফাইল
                                            </Link>
                                        </li>
                                        <li>
                                            <button onClick={handleLogout} className="flex items-center w-full text-left gap-2 px-2 py-1 hover:text-blue-500 transition-colors duration-300">
                                                <MdLogout size={20} />
                                                লগআউট
                                            </button>
                                        </li>
                                    </>
                                )}
                                {!user && (
                                    <li>
                                        <Link href="/login" className="flex items-center gap-2 px-2 py-1 hover:text-blue-500 transition-colors duration-300">
                                            <MdLogin size={20} />
                                            লগইন
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
                <NoticeMarquee />
            </div>
        </>
    );
};

export default Navbar;
