import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="text-gray-600 bg-gray-100 body-font">
      {/* Top Footer Section */}
      <div className="container px-5 py-16 mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">

        {/* Column 1: Logo and Contact Info */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image
                alt="Maruthi Auto Components Logo"
                src="/Images/Logo.png"
                width={60}
                height={50}
                className="rounded"
              />
              <span className="ml-3 text-lg font-semibold text-red-400">
                Maruthi Auto Components
              </span>
            </Link>

            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex justify-center md:justify-start items-start">
                <FaMapMarkerAlt className="text-red-500 mr-2 mt-1" />
                <span>
                  Site No 3, Raghavendra Industrial Estate,<br />
                  Peenya 2nd Stage, Bangalore - 560058
                </span>
              </p>
              <p className="flex justify-center md:justify-start items-center">
                <FaEnvelope className="text-red-500 mr-2" />
                maruthiautocomponents@gmail.com
              </p>
              <p className="flex justify-center md:justify-start items-center">
                <FaPhoneAlt className="text-red-500 mr-2" />
                93437 77577 / 90082 34224
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Legal Links */}
        <div className="w-full md:w-1/5 flex justify-center md:justify-start text-center md:text-left">
          <div>
            <h2 className="title-font font-medium text-red-400 tracking-widest text-sm mb-3">
              LEGAL
            </h2>
            <nav className="list-none space-y-2">
              <li>
                <a
                  href="/Files/Privacy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/Files/Terms.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/Files/Disclaimer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="/Files/Return.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500"
                >
                  Return & Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="/Files/Shipping.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="/Files/certificate1.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500"
                >
                  Compliance & Certifications
                </a>
              </li>
            </nav>
          </div>
        </div>

        {/* Column 3: Products */}
        <div className="w-full md:w-1/5 flex justify-center md:justify-start text-center md:text-left">
          <div>
            <h2 className="title-font font-medium text-red-400 tracking-widest text-sm mb-3">
              PRODUCTS
            </h2>
            <nav className="list-none space-y-2">
              <li>
                <a href="/products#laser" className="text-gray-600 hover:text-red-500">
                  Laser Cut Parts
                </a>
              </li>
              <li>
                <a href="/products#bending" className="text-gray-600 hover:text-red-500">
                  CNC Bending
                </a>
              </li>
              <li>
                <a href="/products#rods" className="text-gray-600 hover:text-red-500">
                  Tie Rods & Bolts
                </a>
              </li>
              <li>
                <a href="/products#enclosure" className="text-gray-600 hover:text-red-500">
                  Electrical Parts
                </a>
              </li>
            </nav>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start text-center md:text-left">
          <div>
            <h2 className="title-font font-medium text-red-400 tracking-widest text-sm mb-3">
              STAY CONNECTED
            </h2>
            <p className="text-gray-600 mb-4">
              Subscribe for updates and business quotes.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full sm:w-auto flex-grow bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-2 px-4"
              />
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-2">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t bg-gray-200 border-gray-300 mt-1 shadow-lg">
        <div className="container px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Maruthi Auto Components. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Maintained by Swasyaha Solutions
          </p>
          <div className="flex justify-center gap-4">
            <a className="text-gray-500 hover:text-red-500" href="#" aria-label="Facebook">
              <FaFacebookF className="w-5 h-4" />
            </a>
            <a className="text-gray-500 hover:text-red-500" href="#" aria-label="Twitter">
              <FaTwitter className="w-5 h-4" />
            </a>
            <a className="text-gray-500 hover:text-red-500" href="#" aria-label="Instagram">
              <FaInstagram className="w-5 h-4" />
            </a>
            <a className="text-gray-500 hover:text-red-500" href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="w-5 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
