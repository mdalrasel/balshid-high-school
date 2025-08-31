// src/components/DashboardCard.jsx
import React from 'react';
import Link from 'next/link';

const DashboardCard = ({ title, icon, path }) => {
    return (
        <Link href={path} className="card bg-white dark:bg-gray-800 shadow-xl transition-transform duration-300 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="card-body items-center text-center">
                <div className="text-primary dark:text-primary-focus">
                    {icon}
                </div>
                <h2 className="card-title text-gray-900 dark:text-white mt-2">{title}</h2>
            </div>
        </Link>
    );
};

export default DashboardCard;