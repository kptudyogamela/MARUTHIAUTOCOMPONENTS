// pages/index.js
import Image from 'next/image';
import Head from 'next/head';

export default function Herosection() {
  return (
    <>
      <Head>
        <title>Maruthi Auto Components</title>
        <meta name="description" content="Precision Auto Turned Components, Laser Cutting, and CNC Bending." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white h-[90vh] flex items-center justify-center relative">
        <div className="absolute inset-0">
          <Image src="/factory-hero.jpg" layout="fill" objectFit="cover" alt="Factory Background" />
          <div className="bg-black bg-opacity-70 h-full w-full absolute inset-0" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Zero Defect is Our Objective</h1>
          <div className="space-x-4">
            <a href="/products" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold">Explore Products</a>
            <a href="/contact" className="bg-white hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-semibold">Get a Quote</a>
          </div>
        </div>
      </section>

      {/* About & Stats */}
      <section className="bg-white py-16 px-8 text-center">
        <h2 className="text-2xl font-semibold mb-6">Maruthi Auto Components</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Established in 2013, MAC is a leading manufacturer of precision auto turned components, tubular parts, laser cutting, and CNC bending solutions based in Bangalore.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-red-600">2013</h3>
            <p className="text-gray-500">Established</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-red-600">25+</h3>
            <p className="text-gray-500">Employees</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-red-600">15+</h3>
            <p className="text-gray-500">Machines</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-red-600">35+</h3>
            <p className="text-gray-500">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Clients Slider Placeholder */}
      <section className="bg-gray-100 py-12">
        <h3 className="text-center text-xl font-semibold mb-6">Trusted By</h3>
        <div className="flex justify-center gap-10 flex-wrap">
          <Image src="/clients/havells.png" width={100} height={60} alt="Havells" />
          <Image src="/clients/surin.png" width={100} height={60} alt="Surin Automotive" />
          {/* Add more logos */}
        </div>
      </section>

      {/* Featured Products Placeholder */}
      <section className="py-12 px-8 bg-white">
        <h3 className="text-center text-xl font-semibold mb-6">Featured Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-4 rounded-xl shadow">
            <Image src="/products/tie-rod.jpg" width={200} height={150} alt="Tie Rod" />
            <h4 className="mt-2 font-medium">Tie Rod</h4>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl shadow">
            <Image src="/products/corner-piece.jpg" width={200} height={150} alt="Corner Piece" />
            <h4 className="mt-2 font-medium">Corner Piece</h4>
          </div>
          {/* Add more product cards */}
        </div>
      </section>

      {/* Quality & Certification */}
      <section className="bg-gray-100 py-16 text-center">
        <h3 className="text-xl font-semibold mb-4">Our Commitment to Quality</h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          MAC is committed to zero defects, continuous improvement through Kaizen, and robust quality systems like QMS and ISO standards.
        </p>
        <div className="mt-6">
          <Image src="/certificates/iso.png" width={150} height={100} alt="ISO Certification" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-8 text-center">
        <p>© {new Date().getFullYear()} Maruthi Auto Components | Bangalore</p>
        <p>Email: maruthiautocomponents@gmail.com | Phone: 9343777577</p>
      </footer>
    </>
  );
}
