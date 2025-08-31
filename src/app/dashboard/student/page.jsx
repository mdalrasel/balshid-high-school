// src/app/dashboard/student/page.jsx
"use client";

import React, { useEffect } from 'react';
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from 'next/navigation';
import DashboardCard from '@/components/DashboardCard';
import { MdPostAdd, MdBook, MdPerson } from 'react-icons/md';

const StudentDashboard = () => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && (!user || user.role !== 'student')) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading || !user || user.role !== 'student') {
        return <div className="text-center text-gray-500 dark:text-gray-400">Loading...</div>;
    }

    const studentMenuItems = [
        { title: 'নতুন পোস্ট যোগ করুন', icon: <MdPostAdd size={40} />, path: '/dashboard/student/add-post' },
        { title: 'আমার ফলাফল', icon: <MdBook size={40} />, path: '/dashboard/student/my-results' },
        { title: 'আমার প্রোফাইল', icon: <MdPerson size={40} />, path: '/dashboard/student/profile' }
    ];

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">শিক্ষার্থী ড্যাশবোর্ড</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studentMenuItems.map((item, index) => (
                    <DashboardCard key={index} title={item.title} icon={item.icon} path={item.path} />
                ))}
            </div>
        </div>
    );
};

export default StudentDashboard;