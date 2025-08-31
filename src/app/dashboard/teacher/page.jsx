// src/app/dashboard/teacher/page.jsx
"use client";

import React, { useEffect } from 'react';
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from 'next/navigation';
import DashboardCard from '@/components/DashboardCard';
import { MdPostAdd, MdPost, MdBook, MdPeople } from 'react-icons/md';

const TeacherDashboard = () => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && (!user || user.role !== 'teacher')) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading || !user || user.role !== 'teacher') {
        return <div className="text-center text-gray-500 dark:text-gray-400">Loading...</div>;
    }

    const teacherMenuItems = [
        { title: 'শিক্ষার্থীদের পোস্ট রিভিউ', icon: <MdPost size={40} />, path: '/dashboard/teacher/review-posts' },
        { title: 'শিক্ষার্থীদের ফলাফল', icon: <MdBook size={40} />, path: '/dashboard/teacher/student-results' },
        { title: 'আমার পোস্ট যোগ করুন', icon: <MdPostAdd size={40} />, path: '/dashboard/teacher/add-post' },
        { title: 'আমার শিক্ষার্থীরা', icon: <MdPeople size={40} />, path: '/dashboard/teacher/my-students' }
    ];

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">শিক্ষক ড্যাশবোর্ড</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teacherMenuItems.map((item, index) => (
                    <DashboardCard key={index} title={item.title} icon={item.icon} path={item.path} />
                ))}
            </div>
        </div>
    );
};

export default TeacherDashboard;