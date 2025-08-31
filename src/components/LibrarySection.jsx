// components/LibrarySection.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const demoBooks = [
    {
        id: '1',
        title: 'অ্যাকাউন্টিং (হিসাববিজ্ঞান)',
        className: 'নবম শ্রেণি',
        image: 'https://placehold.co/200x300/F5F5F5/474747?text=Accounting+Book',
        details: {
            banglaName: 'অ্যাকাউন্টিং (হিসাববিজ্ঞান)',
            englishName: 'Accounting',
            class: '৯',
            stage: 'মাধ্যমিক',
            fullContent: 'হিসাববিজ্ঞান হলো এমন একটি পদ্ধতি যা আর্থিক লেনদেনগুলোকে লিপিবদ্ধ, শ্রেণীভুক্ত, সারসংক্ষেপ এবং বিশ্লেষণ করতে ব্যবহার করা হয়। এটি একটি প্রতিষ্ঠানের আর্থিক অবস্থা এবং কর্মক্ষমতা বোঝার জন্য অপরিহার্য।'
        }
    },
    {
        id: '2',
        title: 'হাদীস শরীফ (আরবি সাহিত্য)',
        className: 'নবম শ্রেণি',
        image: 'https://placehold.co/200x300/F0FFF0/333333?text=Hadith+Sharif',
        details: {
            banglaName: 'হাদীস শরীফ (আরবি সাহিত্য)',
            englishName: 'Hadith Sharif',
            class: '৯',
            stage: 'মাধ্যমিক',
            fullContent: 'হাদীস শরীফ হলো ইসলামের দ্বিতীয় প্রধান উৎস, যেখানে রাসূলুল্লাহ (সাঃ) এর কথা, কাজ এবং নীরব অনুমোদন লিপিবদ্ধ আছে। এটি মুসলিমদের জন্য একটি গুরুত্বপূর্ণ দিক নির্দেশনা।'
        }
    },
    {
        id: '3',
        title: 'English Grammar and Composition',
        className: 'নবম শ্রেণি',
        image: 'https://placehold.co/200x300/E6E6FA/003366?text=English+Grammar',
        details: {
            banglaName: 'ইংলিশ গ্রামার এন্ড কম্পোজিশন',
            englishName: 'English Grammar and Composition',
            class: '৯',
            stage: 'মাধ্যমিক',
            fullContent: 'ইংরেজি ব্যাকরণ ও রচনা বইটি শিক্ষার্থীদের ইংরেজি ভাষার সঠিক ব্যবহার, লেখার শৈলী এবং যোগাযোগের দক্ষতা উন্নত করতে সাহায্য করে। এই বইটি ভাষার মূল নিয়মাবলী এবং প্রয়োগের উপর জোর দেয়।'
        }
    },
    {
        id: '4',
        title: 'Higher Mathematics (উচ্চতর গণিত)',
        className: 'নবম শ্রেণি',
        image: 'https://placehold.co/200x300/F5F5F5/005A9C?text=Higher+Math',
        details: {
            banglaName: 'উচ্চতর গণিত',
            englishName: 'Higher Mathematics',
            class: '৯',
            stage: 'মাধ্যমিক',
            fullContent: 'উচ্চতর গণিত বইটি শিক্ষার্থীদের জন্য গণিতের জটিল ধারণাসমূহ, যেমন ক্যালকুলাস, ত্রিকোণমিতি এবং জ্যামিতি, সহজে বোঝার জন্য তৈরি করা হয়েছে। এটি শিক্ষার্থীদের গাণিতিক যুক্তি ও সমস্যা সমাধানের ক্ষমতা বাড়ায়।'
        }
    },
    {
        id: '5',
        title: 'Art and Culture (চারু ও কারুকলা)',
        className: 'নবম শ্রেণি',
        image: 'https://placehold.co/200x300/E0FFFF/8B0000?text=Art+and+Culture',
        details: {
            banglaName: 'চারু ও কারুকলা',
            englishName: 'Art and Culture',
            class: '৯',
            stage: 'মাধ্যমিক',
            fullContent: 'চারু ও কারুকলা বইটি শিক্ষার্থীদের বাংলাদেশের ঐতিহ্যবাহী শিল্প ও সংস্কৃতি সম্পর্কে জ্ঞান দেয়। এর মাধ্যমে শিক্ষার্থীরা বিভিন্ন প্রকার শিল্পকর্ম, যেমন চিত্রকলা, ভাস্কর্য এবং কারুশিল্প সম্পর্কে জানতে পারে।'
        }
    },
    {
        id: '6',
        title: 'পালি',
        className: 'নবম শ্রেণি',
        image: 'https://placehold.co/200x300/D3D3D3/000000?text=Pali+Book',
        details: {
            banglaName: 'পালি',
            englishName: 'Pali',
            class: '৯',
            stage: 'মাধ্যমিক',
            fullContent: 'পালি হলো একটি প্রাচীন ইন্দো-আর্য ভাষা যা বৌদ্ধ ধর্মগ্রন্থের জন্য পরিচিত। এই বইটি শিক্ষার্থীদের পালি ভাষা ও সাহিত্য সম্পর্কে একটি মৌলিক ধারণা দেয় এবং তাদের ধর্মীয় ও সাংস্কৃতিক জ্ঞান বাড়াতে সাহায্য করে।'
        }
    }
];

const LibrarySection = () => {
    return (
        <section className="  py-10 px-4">
            <div className="">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left side: Book Cards */}
                    <div className="w-full">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-bold text-center underline">ই-লাইব্রেরি</h2>
                            <Link href="/library" className="btn btn-primary hidden md:inline-flex">
                                সব বই দেখুন
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {demoBooks.slice(0, 6).map(book => (
                                <Link key={book.id} href={`/library/${book.id}`} className="block transform transition-transform duration-300 hover:scale-105 rounded-xl shadow-lg overflow-hidden cursor-pointer">
                                    <div className="w-full h-48 sm:h-64 md:h-72 relative">
                                        <Image
                                            src={book.image}
                                            alt={book.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-3 text-center bg-gray-50 dark:bg-gray-800">
                                        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">{book.title}</h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{book.className}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-6 text-center md:hidden">
                            <Link href="/library" className="btn btn-primary w-full">
                                সব বই দেখুন
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LibrarySection;