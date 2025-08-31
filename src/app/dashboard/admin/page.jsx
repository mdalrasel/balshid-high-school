// src/app/dashboard/admin/page.jsx
"use client";

import React from 'react';
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardCard from '@/components/DashboardCard';

import { MdPostAdd, MdNotifications, MdGroupAdd, MdPeople, MdSchool, MdBook } from "react-icons/md";

const AdminDashboard = () => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && (!user || user.role !== 'admin')) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading || !user || user.role !== 'admin') {
        return <div className="text-center text-gray-500 dark:text-gray-400">Loading...</div>;
    }

    const adminMenuItems = [
        { title: 'নতুন পোস্ট যোগ করুন', icon: <MdPostAdd size={40} />, path: '/dashboard/admin/add-post' },
        { title: 'নতুন নোটিশ যোগ করুন', icon: <MdNotifications size={40} />, path: '/dashboard/admin/add-notice' },
        { title: 'শিক্ষক যোগ করুন', icon: <MdGroupAdd size={40} />, path: '/dashboard/admin/add-teacher' },
        { title: 'শিক্ষার্থী যোগ করুন', icon: <MdSchool size={40} />, path: '/dashboard/admin/add-student' },
        { title: 'শিক্ষার্থীদের তালিকা', icon: <MdPeople size={40} />, path: '/dashboard/admin/students' },
        { title: 'শিক্ষকদের তালিকা', icon: <MdPeople size={40} />, path: '/dashboard/admin/teachers' },
        { title: 'বই যোগ করুন', icon: <MdBook size={40} />, path: '/dashboard/admin/add-book' },
    ];

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">অ্যাডমিন ড্যাশবোর্ড</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adminMenuItems.map((item, index) => (
                    <DashboardCard key={index} title={item.title} icon={item.icon} path={item.path} />
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;