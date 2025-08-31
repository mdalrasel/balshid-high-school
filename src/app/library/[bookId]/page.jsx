// app/library/[bookId]/page.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This is a simplified demo. In a real application, you would fetch data from a database.
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
    },
    {
        id: '7',
        title: 'গণিত',
        className: 'ষষ্ঠ শ্রেণি',
        image: 'https://placehold.co/200x300/D6D8D2/111111?text=Class+6+Math',
        details: {
            banglaName: 'গণিত',
            englishName: 'Mathematics',
            class: '৬',
            stage: 'নিম্ন মাধ্যমিক',
            fullContent: 'ষষ্ঠ শ্রেণির গণিত বইটি শিক্ষার্থীদের মৌলিক গাণিতিক ধারণা এবং সমস্যা সমাধানের কৌশল শেখায়। এটি বীজগণিত ও জ্যামিতির প্রাথমিক ধারণা দেয়।'
        }
    },
    {
        id: '8',
        title: 'বাংলা',
        className: 'সপ্তম শ্রেণি',
        image: 'https://placehold.co/200x300/C4D7B2/333333?text=Class+7+Bangla',
        details: {
            banglaName: 'বাংলা সাহিত্য',
            englishName: 'Bengali Literature',
            class: '৭',
            stage: 'নিম্ন মাধ্যমিক',
            fullContent: 'সপ্তম শ্রেণির বাংলা বইটি বাংলা সাহিত্য ও ব্যাকরণের বিভিন্ন দিক নিয়ে আলোচনা করে। এটি শিক্ষার্থীদের পদ্য, গদ্য এবং রচনার দক্ষতা বাড়াতে সাহায্য করে।'
        }
    },
    {
        id: '9',
        title: 'বিজ্ঞান',
        className: 'অষ্টম শ্রেণি',
        image: 'https://placehold.co/200x300/8B008B/FFFFFF?text=Class+8+Science',
        details: {
            banglaName: 'বিজ্ঞান',
            englishName: 'Science',
            class: '৮',
            stage: 'নিম্ন মাধ্যমিক',
            fullContent: 'অষ্টম শ্রেণির বিজ্ঞান বইটি পদার্থ, রসায়ন এবং জীববিজ্ঞানের মৌলিক ধারণাসমূহ নিয়ে গঠিত। এটি শিক্ষার্থীদের বৈজ্ঞানিক অনুসন্ধিৎসা জাগাতে সাহায্য করে।'
        }
    },
    {
        id: '10',
        title: 'রসায়ন',
        className: 'দশম শ্রেণি',
        image: 'https://placehold.co/200x300/FFDAB9/4B0082?text=Class+10+Chemistry',
        details: {
            banglaName: 'রসায়ন',
            englishName: 'Chemistry',
            class: '১০',
            stage: 'মাধ্যমিক',
            fullContent: 'দশম শ্রেণির রসায়ন বইটি রাসায়নিক বিক্রিয়া, পর্যায় সারণি এবং জৈব রসায়নের মতো গুরুত্বপূর্ণ বিষয় নিয়ে আলোচনা করে। এটি শিক্ষার্থীদের উচ্চশিক্ষার জন্য প্রস্তুত করে।'
        }
    },
];

export default function BookDetailsPage({ params }) {
    const { bookId } = params;
    const book = demoBooks.find(b => b.id === bookId);

    if (!book) {
        return (
            <div className="container mx-auto py-10 text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">বইটি খুঁজে পাওয়া যায়নি!</h1>
            </div>
        );
    }

    // Filter for books of the same class, excluding the current book
    const relatedBooks = demoBooks.filter(b => b.className === book.className && b.id !== bookId).slice(0, 4);

    // Shuffle all books to get a random selection for the right sidebar
    const randomBooks = demoBooks.slice().sort(() => 0.5 - Math.random()).slice(0, 4);

    return (
        <div className=" py-10 px-4">
            <div className="rounded-lg  p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Section: Book Details */}
                    <div className="w-full lg:w-2/3">
                        <div className="w-full relative rounded-lg overflow-hidden mb-8">


                            [Image of a book]

                        </div>
                        <h1 className="text-3xl lg:text-4xl font-extrabold  mb-4">{book.details.banglaName}</h1>
                        <div className="grid grid-cols-2 gap-4  mb-6">
                            <div>
                                <span className="font-semibold">বাংলা নাম:</span> {book.details.banglaName}
                            </div>
                            <div>
                                <span className="font-semibold">ইংরেজি নাম:</span> {book.details.englishName}
                            </div>
                            <div>
                                <span className="font-semibold">শ্রেণি:</span> {book.details.class}
                            </div>
                            <div>
                                <span className="font-semibold">স্তর:</span> {book.details.stage}
                            </div>
                        </div>
                        <div className="prose dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold  mt-8 mb-4">বিস্তারিত</h2>
                            <p>{book.details.fullContent}</p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <a href={book.image} target="_blank" rel="noopener noreferrer" className="btn btn-secondary px-6">
                                ডাউনলোড
                            </a>
                            <button className="btn btn-outline btn-info px-6">
                                অনলাইন পাঠ করুন
                            </button>
                        </div>
                        <div className="rounded-xl p-6 shadow-md w-full  mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">একই শ্রেণির অন্যান্য বই</h3>
                            <div className="grid grid-cols-2 gap-4 ">
                                {relatedBooks.map(relatedBook => (
                                    <Link key={relatedBook.id} href={`/library/${relatedBook.id}`} className="block transform transition-transform duration-300 border hover:scale-105 rounded-xl shadow-lg overflow-hidden cursor-pointer">
                                        <div className="w-full h-32 relative">
                                            <Image src={relatedBook.image} alt={relatedBook.title} fill className="object-cover" />
                                        </div>
                                        <div className="p-2 text-center bg-gray-50 dark:bg-gray-800">
                                            <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">{relatedBook.title}</h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Search and Other Books */}
                    <div className="w-full lg:w-1/3 flex flex-col items-center">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md w-full mb-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">বই অনুসন্ধান</h3>
                            <input type="text" placeholder="বইয়ের নাম" className="input input-bordered w-full mb-2" />
                            <select className="select select-bordered w-full mb-2" defaultValue="শ্রেণি নির্বাচন">
                                <option disabled value="শ্রেণি নির্বাচন">শ্রেণি নির্বাচন</option>
                                <option>ষষ্ঠ শ্রেণি</option>
                                <option>সপ্তম শ্রেণি</option>
                                <option>অষ্টম শ্রেণি</option>
                                <option>নবম শ্রেণি</option>
                                <option>দশম শ্রেণি</option>
                            </select>
                            <button className="btn btn-primary w-full">অনুসন্ধান</button>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md w-full">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">র‍্যান্ডম বই</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {randomBooks.map(randomBook => (
                                    <Link key={randomBook.id} href={`/library/${randomBook.id}`} className="block transform transition-transform duration-300 hover:scale-105 rounded-xl shadow-lg overflow-hidden cursor-pointer">
                                        <div className="w-full h-32 relative">
                                            <Image src={randomBook.image} alt={randomBook.title} fill className="object-cover" />
                                        </div>
                                        <div className="p-2 text-center bg-gray-50 dark:bg-gray-800">
                                            <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">{randomBook.title}</h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}