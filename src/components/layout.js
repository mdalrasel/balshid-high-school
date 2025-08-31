// src/app/dashboard/layout.js
"use client";

import DashboardSidebar from "@/components/DashboardSidebar";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Redirect to login if not authenticated
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);
    
    // Show a loading state or nothing while the user is being authenticated
    if (loading) {
        return <div className="text-center text-gray-500 dark:text-gray-400">Loading dashboard...</div>;
    }

    if (!user) {
        return null;
    }

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            <DashboardSidebar />
            <div className="flex-1 flex flex-col p-4 lg:p-8 ml-0 lg:ml-64 transition-all duration-300">
                {children}
            </div>
        </div>
    );
}