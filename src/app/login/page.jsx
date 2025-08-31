// src/app/login/page.jsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';

const LoginPage = () => {
    const [userId, setUserId] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!userId) {
            setError('ইউজার আইডি দিতে হবে।');
            return;
        }

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login successful
                login(data.token, data.user);
                router.push('/dashboard');
            } else {
                // Login failed
                setError(data.message || 'লগইন ব্যর্থ হয়েছে।');
            }
        } catch (err) {
            setError('সার্ভারের সাথে সংযোগে সমস্যা হয়েছে।');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <div className="card w-96 bg-white dark:bg-gray-700 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center text-gray-900 dark:text-white">লগইন</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center">আপনার ইউজার আইডি দিয়ে লগইন করুন।</p>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <label className="label">
                            <span className="label-text text-gray-700 dark:text-gray-200">ইউজার আইডি</span>
                        </label>
                        <input
                            type="text"
                            placeholder="যেমন: admin123"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className="input input-bordered w-full"
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <div className="card-actions justify-end mt-6">
                            <button type="submit" className="btn btn-primary w-full">লগইন</button>
                        </div>
                    </form>
                    <div className="text-center text-sm mt-4">
                        <Link href="/" className="text-blue-500 hover:underline">
                            হোমপেজে ফিরে যান
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;