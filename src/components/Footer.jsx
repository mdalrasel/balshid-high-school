// components/Footer.jsx
const Footer = () => {
    return (
        // Footer section with basic text and styling
        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয় । সর্বস্বত্ব সংরক্ষিত।</p>
                <div className="mt-4 space-x-4">
                    <a href="#" className="hover:underline">গোপনীয়তা নীতি</a>
                    <a href="#" className="hover:underline">ব্যবহারের শর্তাবলী</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;