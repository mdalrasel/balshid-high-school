// src/components/DashboardSidebar.jsx
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { MdPostAdd, MdNotifications, MdGroupAdd, MdPeople, MdSchool, MdBook, MdLogout, MdPerson, MdDashboard, MdPost } from 'react-icons/md';
import Image from 'next/image';
import schoolLogo from '../../app/assists/Profile.png'; // Assuming this is your school logo

const DashboardSidebar = () => {
    const { user, logout, loading } = useAuth();
    const pathname = usePathname();

    const adminMenuItems = [
        { name: 'ড্যাশবোর্ড', path: '/dashboard/admin', icon: <MdDashboard size={20} /> },
        { name: 'নতুন পোস্ট যোগ করুন', path: '/dashboard/admin/add-post', icon: <MdPostAdd size={20} /> },
        { name: 'নতুন নোটিশ যোগ করুন', path: '/dashboard/admin/add-notice', icon: <MdNotifications size={20} /> },
        { name: 'শিক্ষক যোগ করুন', path: '/dashboard/admin/add-teacher', icon: <MdGroupAdd size={20} /> },
        { name: 'শিক্ষার্থী যোগ করুন', path: '/dashboard/admin/add-student', icon: <MdSchool size={20} /> },
        { name: 'শিক্ষার্থীদের তালিকা', path: '/dashboard/admin/students', icon: <MdPeople size={20} /> },
        { name: 'শিক্ষকদের তালিকা', path: '/dashboard/admin/teachers', icon: <MdPeople size={20} /> },
        { name: 'বই যোগ করুন', path: '/dashboard/admin/add-book', icon: <MdBook size={20} /> },
    ];

    const teacherMenuItems = [
        { name: 'ড্যাশবোর্ড', path: '/dashboard/teacher', icon: <MdDashboard size={20} /> },
        { name: 'শিক্ষার্থীদের পোস্ট রিভিউ', path: '/dashboard/teacher/review-posts', icon: <MdPost size={20} /> },
        { name: 'শিক্ষার্থীদের ফলাফল', path: '/dashboard/teacher/student-results', icon: <MdBook size={20} /> },
        { name: 'আমার পোস্ট যোগ করুন', path: '/dashboard/teacher/add-post', icon: <MdPostAdd size={20} /> },
        { name: 'আমার শিক্ষার্থীরা', path: '/dashboard/teacher/my-students', icon: <MdPeople size={20} /> }
    ];

    const studentMenuItems = [
        { name: 'ড্যাশবোর্ড', path: '/dashboard/student', icon: <MdDashboard size={20} /> },
        { name: 'নতুন পোস্ট যোগ করুন', path: '/dashboard/student/add-post', icon: <MdPostAdd size={20} /> },
        { name: 'আমার ফলাফল', path: '/dashboard/student/my-results', icon: <MdBook size={20} /> },
        { name: 'আমার প্রোফাইল', path: '/dashboard/student/profile', icon: <MdPerson size={20} /> }
    ];

    let menuItems = [];
    if (user) {
        if (user.role === 'admin') {
            menuItems = adminMenuItems;
        } else if (user.role === 'teacher') {
            menuItems = teacherMenuItems;
        } else if (user.role === 'student') {
            menuItems = studentMenuItems;
        }
    }

    if (loading || !user) {
        return null;
    }

    return (
        <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-xl transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                    <Image src={schoolLogo} alt="School Logo" width={40} height={40} className="rounded-full" />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">ড্যাশবোর্ড</span>
                </div>
            </div>
            <nav className="mt-6">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path} className={`flex items-center space-x-4 px-4 py-2 transition-colors duration-200 ease-in-out ${pathname === item.path ? 'bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button onClick={logout} className="flex items-center space-x-4 px-4 py-2 w-full text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ease-in-out">
                            <MdLogout size={20} />
                            <span>লগআউট</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default DashboardSidebar;