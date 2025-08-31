// components/Navbar.jsx
'use client';

import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import Image from 'next/image';
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import ProfilePic from '../../app/assists/Profile.png';
import Banner1 from '../../app/assists/balshid high school banner.jpeg';
import NoticeMarquee from '../NoticeMarquee';

const Navbar = () => {

    const navLinks = (
        <>
            <Link href="/" className="px-2 py-1 hover:text-blue-500">হোম</Link>
            <Link href="/" className="px-2 py-1 hover:text-blue-500">নোটিশ</Link>
            <Link href="/" className="px-2 py-1 hover:text-blue-500">পোস্ট</Link>
            <Link href="/" className="px-2 py-1 hover:text-blue-500">ভিডিও</Link>
            <Link href="/" className="px-2 py-1 hover:text-blue-500">ড্যাশবোর্ড</Link>
        </>
    );

    return (
        <>
            {/* Banner Section */}
            <div className="w-full">
                <Image className='w-full object-cover ' src={Banner1} alt='বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয়' />
            </div>

            {/* Navbar with sticky positioning */}

            <div className='sticky top-0 z-50'>
                <nav className="navbar  bg-base-100 shadow-sm ">
                    {/* Navbar Start Section */}
                    <div className="navbar-start">
                        <Image className='w-12 h-12 rounded-full object-cover' src={ProfilePic} alt='বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয়' />
                    </div>

                    {/* Navbar Center (Desktop Links) */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            {navLinks}
                        </ul>
                    </div>

                    {/* Navbar End Section */}
                    <div className="navbar-end gap-4">
                        <ThemeToggle />
                        <Link href="/login" className="btn btn-primary">লগইন</Link>

                        {/* Mobile Dropdown Menu */}
                        <div className="dropdown dropdown-left">
                            <div tabIndex={0} role="button" className="cursor-pointer lg:hidden">
                                <MdMenu size={35} />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] gap-3 mt-14 w-48 p-2 shadow-2xl ">
                                {navLinks}
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