'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HomepageCarousel = () => {
    const swiperModules = [Autoplay, Pagination];
    
    
    const carouselImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYOwKHHqtBOvrwOy2e1kowJXM8tBilz-J5g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCloAknz_ak-J6n6NxcKctIh79HkBdjvhew&s",
        "https://bknghs.edu.bd/wp-content/uploads/2022/05/61dfc3e8c79c6641948428.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAKrL-Fn5OhzzPnmQHTc-3jd8RF391yDIPg&s"
    ];

    const AboutSection = ({ title, imgText, content, fullContent, uniqueId }) => {
        const modalId = `modal-${uniqueId}`;

        return (
            <div className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex-1 ">
                <img
                    src={`https://placehold.co/200x200/cccccc/333333?text=${imgText}`}
                    alt={`${title} এর ছবি`}
                    className="w-24 md:w-40 rounded-full object-cover mb-4 shadow-md"
                />
                <div className="text-center">
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm mb-2 md:mb-4">
                        {content}
                    </p>
                    
                    <button
                        className="text-blue-600 hover:underline dark:text-blue-400"
                        onClick={() => document.getElementById(modalId).showModal()}
                    >
                        আরও পড়ুন
                    </button>
                </div>
                
                {/* modal */}
                <dialog id={modalId} className="modal">
                    <div className="modal-box bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl ">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            {fullContent}
                        </p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button
                                    className="btn btn-primary bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                >
                                    বন্ধ করুন
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        );
    };

    return (
        <div className=" px-4 py-8">
            
            <div className="flex flex-col gap-4 lg:hidden">
                <div className="w-full rounded-xl overflow-hidden shadow-lg">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        
                        modules={swiperModules}
                        className="mySwiper "
                    >
                        {carouselImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full "
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <AboutSection
                        title="চেয়ারম্যান সম্পর্কে"
                        imgText="Chairman"
                        content="বর্তমান স্কুল বিজ্ঞান ও তথ্য-প্রযুক্তি উন্নত করবে..."
                        fullContent="আমাদের সম্মানিত চেয়ারম্যানের নেতৃত্বে, বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয় বিজ্ঞান ও তথ্য-প্রযুক্তিতে একটি নতুন দিগন্ত উন্মোচন করতে বদ্ধপরিকর। আমাদের লক্ষ্য হলো শিক্ষার্থীদেরকে ২১ শতকের চ্যালেঞ্জ মোকাবেলায় প্রস্তুত করা এবং তাদের সৃজনশীলতা ও উদ্ভাবনী ক্ষমতাকে উৎসাহিত করা।"
                        uniqueId="chairman-mobile" // এখানে একটি অনন্য আইডি যোগ করা হয়েছে
                    />
                    <AboutSection
                        title="প্রিন্সিপাল সম্পর্কে"
                        imgText="Principal"
                        content="The magnificently, systematically and..."
                        fullContent="The magnificently, systematically and meticulously crafted curriculum of our school, under the visionary guidance of our esteemed Principal, ensures a holistic and well-rounded education. We are dedicated to nurturing not just academic excellence but also the moral and ethical values that shape responsible global citizens."
                        uniqueId="principal-mobile" 
                    />
                </div>
            </div>
            <div className="hidden lg:flex flex-row gap-8 items-center">
                <div className="w-1/6">
                    <AboutSection
                        title="চেয়ারম্যান সম্পর্কে"
                        imgText="Chairman"
                        content="বর্তমান স্কুল বিজ্ঞান ও তথ্য-প্রযুক্তি উন্নত করবে..."
                        fullContent="আমাদের সম্মানিত চেয়ারম্যানের নেতৃত্বে, বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয় বিজ্ঞান ও তথ্য-প্রযুক্তিতে একটি নতুন দিগন্ত উন্মোচন করতে বদ্ধপরিকর। আমাদের লক্ষ্য হলো শিক্ষার্থীদেরকে ২১ শতকের চ্যালেঞ্জ মোকাবেলায় প্রস্তুত করা এবং তাদের সৃজনশীলতা ও উদ্ভাবনী ক্ষমতাকে উৎসাহিত করা।"
                        uniqueId="chairman-desktop" 
                    />
                </div>
                
                {/* মাঝখানের Swiper ক্যারোসেল স্লাইডার */}
                <div className="w-4/6 rounded-xl overflow-hidden shadow-lg">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        modules={swiperModules}
                        className="mySwiper h-96"
                    >
                        {carouselImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full  object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* ডান পাশের স্থির ব্লক (About Principal) */}
                <div className="w-1/6">
                    <AboutSection
                        title="প্রিন্সিপাল সম্পর্কে"
                        imgText="Principal"
                        content="The magnificently, systematically and..."
                        fullContent="The magnificently, systematically and meticulously crafted curriculum of our school, under the visionary guidance of our esteemed Principal, ensures a holistic and well-rounded education. We are dedicated to nurturing not just academic excellence but also the moral and ethical values that shape responsible global citizens."
                        uniqueId="principal-desktop" // এখানে একটি অনন্য আইডি যোগ করা হয়েছে
                    />
                </div>
            </div>
        </div>
    );
};

export default HomepageCarousel;