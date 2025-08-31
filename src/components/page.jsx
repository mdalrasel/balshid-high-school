// src/app/dashboard/page.jsx
"use client";

import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const DashboardIndexPage = () => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!user) {
                // No user logged in, redirect to login page
                router.push('/login');
            } else if (user.role === 'admin') {
                router.push('/dashboard/admin');
            } else if (user.role === 'teacher') {
                router.push('/dashboard/teacher');
            } else if (user.role === 'student') {
                router.push('/dashboard/student');
            } else {
                // Handle unknown roles or default behavior
                router.push('/login');
            }
        }
    }, [user, loading, router]);

    if (loading) {
        return <div className="text-center text-gray-500 dark:text-gray-400">Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
                <h1 className="text-2xl text-gray-900 dark:text-white">ড্যাশবোর্ড লোড হচ্ছে...</h1>
            </div>
        </div>
    );
};

export default DashboardIndexPage;