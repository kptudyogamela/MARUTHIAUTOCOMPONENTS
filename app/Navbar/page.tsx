'use client'; // Important if you're using Next.js 13+ App Router

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font shadow bg-white sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo + Title */}
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/Images/logo.png"
            width={72}
            height={60}
          /> */}

          <span className="ml-3 text-xl font-bold">Maruthi Auto Components</span>
        </Link>

        {/* Navigation Links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link href="/About" className="mr-5 hover:text-gray-900">About Us</Link>
          <Link href="/Products" className="mr-5 hover:text-gray-900">Products</Link>
          <Link href="/Services" className="mr-5 hover:text-gray-900">Services</Link>
          <Link href="/Businessplans" className="mr-5 hover:text-gray-900">Business Plans</Link>
          <Link href="/Gallery" className="mr-5 hover:text-gray-900">Gallery</Link>
          <Link href="/Contact" className="mr-5 hover:text-gray-900">Contact</Link>
          <Link href="/Career" className="mr-5 hover:text-gray-900">Career</Link>
        </nav>

        {/* CTA Button */}
        <Link href="/contact">
          <button className="inline-flex items-center bg-red-600 text-white border-0 py-1 px-4 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0">
            Get a Quote
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}
