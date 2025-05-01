// import React from 'react'
// import Team from '../Team/page'

// function page() {
//   return (
//     <div>
//       {/* <Ourstory /> */}
//       {/* <Vision /> */}
//       <Team />
//       {/* <Infrastructure /> */}
//     </div>
//   )
// }

// export default page


'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About Maruthi Auto Components
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Precision Auto Turned Components & Tubular Parts Manufacturer since 2013
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Maruthi Auto Components was established on <strong>10th May 2013</strong> at
              No. 3, Raghavendra Industrial Estate, Phase 2, Tigalarapalya, Peenya 2nd Stage, Bangalore – 560058.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Starting with just 8 employees, the company has grown steadily and today operates with a skilled team of over 25 employees.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We specialize in the manufacturing of precision auto turned components and tubular parts, with facilities for laser cutting (3kW), CNC bending (110T), and parts such as tie rods, slag rods, and foundation bolts.
            </p>
          </div>
          <Image
            src="/Images/factory.jpg"
            alt="Maruthi Factory"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Manufacturing Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-700">
            <ul className="space-y-3">
              <li>⚙️ In-house processes: Turning, Drilling, Threading, Chamfering</li>
              <li>🧰 Any type of turned parts manufacturing</li>
              <li>🪛 Job work for Laser Cutting (3kW)</li>
              <li>🏗️ CNC Bending – 110 Ton capacity</li>
              <li>🔩 Tie Rods, Slag Rods, Foundation Bolts</li>
            </ul>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <p className="font-medium">
                Our facility is equipped to deliver quality and consistency, meeting the expectations of our clients across automotive and engineering sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Promoters</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
            The promoters of Maruthi Auto Components bring over <strong>35 years of experience</strong> in the fields of automats, automobile industries, electrical industries, and mechanical parts. With a strong technical foundation, they bring knowledge in modern manufacturing systems such as Lean concepts, ISO/TS certifications, and Quality Management Systems (QMS).
          </p>
        </div>
      </section>
    </main>
  );
}
