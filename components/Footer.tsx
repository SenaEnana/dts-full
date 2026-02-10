'use client';

import Link from 'next/link';

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">

            <div className="text-left">
                <h4 className="text-white text-xl font-bold mb-4 font-heading">DTS</h4>
                <p className="text-sm leading-relaxed mb-4 font-body">
                    The Doorstep Tutors System (DTS) is dedicated to bridging
                    the gap between expert instructors and students for high-quality,
                    personalized home education.
                </p>
            </div>
            <div className="text-left">
                <h4 className="text-white text-lg font-semibold mb-4 font-heading">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/#" className="hover:text-amber-500 transition font-heading">Home</Link></li>
                    <li><Link href="/#about" className="hover:text-amber-500 transition font-heading">About</Link></li>
                    <li><Link href="/#services" className="hover:text-amber-500 transition font-heading">Services</Link></li>
                    <li><Link href="/#contact" className="hover:text-amber-500 transition font-heading">Contact</Link></li>
                </ul>
            </div>
            <div className="text-left">
                <h4 className="text-white text-lg font-semibold mb-4 font-heading">Legal</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-amber-500 transition font-heading">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-amber-500 transition font-heading">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-amber-500 transition font-heading">Teacher Guidelines</a></li>
                </ul>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 text-center font-heading md:flex md:justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
            <p>© 2026 Doorstep Tutors System. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
                Developed with ❤️ by <span className="text-amber-500 font-bold">Sena Adane</span>
            </p>
        </div>
    </footer>
);

export default Footer;
