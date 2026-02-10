'use client';

import Link from 'next/link';

const Navbar: React.FC = () => (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-amber-200 to-indigo-300 shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold text-gray-700">Doorstep Tutors</h1>
            <ul className="hidden md:flex space-x-6">
                <li><Link href="/#" className="text-black hover:text-amber-600">Home</Link></li>
                <li><Link href="/#about" className="text-black hover:text-amber-600">About</Link></li>
                <li><Link href="/#services" className="text-black hover:text-amber-600">Services</Link></li>
                <li><Link href="/#contact" className="text-black hover:text-amber-600">Contact</Link></li>
            </ul>
            <div className="me-1">
                <button
                    className="w-full md:w-auto bg-amber-500 text-black cursor-pointer font-semibold px-5 py-2 rounded-xl hover:bg-amber-600 transition-all shadow-md hover:shadow-lg active:scale-95">
                    <Link href="/signup">Sign Up</Link>

                </button>
            </div>
        </div>
    </nav>
);

export default Navbar;