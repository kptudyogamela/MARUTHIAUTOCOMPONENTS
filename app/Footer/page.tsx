import Image from "next/image";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="text-gray-600 bg-gray-100 body-font">
      {/* Top Footer Section - Single Row Layout */}
      <div className="container px-5 py-16 mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Column 1: Logo */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <a className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900 mb-2">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/Images/Logo.png"
              width={72}
              height={60}
            />
            <span className="ml-3 text-xl">Maruthi Auto Components</span>
          </a>
          {/* <p className="text-sm text-gray-500 mt-2">Precision components. Zero defect commitment.</p> */}

          <p className="text-sm text-gray-500 mt-2">
            <FaMapMarkerAlt className="inline text-red-500 mr-2" /> Site No 3, Raghavendra Industrial Estate,
            Peenya 2nd Stage, Bangalore - 560058
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <FaEnvelope className="inline text-red-500  mr-2" /> maruthiautocomponents@gmail.com
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <FaPhoneAlt className="inline text-red-500 mr-2" /> 93437 77577 / 90082 34224
          </p>
        </div>

        {/* Column 2: Company Links */}
        <div className="w-full md:w-1/5">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">COMPANY</h2>
          <nav className="list-none space-y-2">
            <li><a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a></li>
            <li><a href="/products" className="text-gray-600 hover:text-gray-800">Products</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            <li><a href="/certifications" className="text-gray-600 hover:text-gray-800">Certifications</a></li>
          </nav>
        </div>

        {/* Column 3: Product Links */}
        <div className="w-full md:w-1/5">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PRODUCTS</h2>
          <nav className="list-none space-y-2">
            <li><a href="/products#laser" className="text-gray-600 hover:text-gray-800">Laser Cut Parts</a></li>
            <li><a href="/products#bending" className="text-gray-600 hover:text-gray-800">CNC Bending</a></li>
            <li><a href="/products#rods" className="text-gray-600 hover:text-gray-800">Tie Rods & Bolts</a></li>
            <li><a href="/products#enclosure" className="text-gray-600 hover:text-gray-800">Electrical Parts</a></li>
          </nav>
        </div>

        {/* Column 4: Newsletter */}
        <div className="w-full md:w-1/3">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">STAY CONNECTED</h2>
          <p className="text-gray-600 mb-4">Subscribe for updates and business quotes.</p>
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

      {/* Bottom Footer */}
      <div className="border-t bg-gray-200 border-gray-300 mt-1 shadow-lg">
        <div className="container px-5 py-3 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Maruthi Auto Components — Bangalore, India
          </p>
          <div className="inline-flex mt-4 sm:mt-0">
            <p className="text-gray-500 text-sm text-center sm:text-left">Maintained by Swasyaha Solutions</p>
          </div>
          <div className="inline-flex mt-4 sm:mt-0">
            <a className="text-gray-500 hover:text-red-500" href="#" aria-label="Facebook">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500 hover:text-red-500" href="#" aria-label="Twitter">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500 hover:text-red-500" href="#" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500 hover:text-red-500" href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
