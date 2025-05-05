import React from 'react';
import { Wrench, ShieldCheck, Warehouse, Layers3 } from 'lucide-react';

function Infrastructure() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Infrastructure</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Discover how Maruthi Auto Components has evolved over the years with continuous investments in machinery, quality, and automation — ensuring world-class manufacturing capabilities.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="-my-8 divide-y-2 divide-gray-100">

          {/* Infrastructure Block 1 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center text-center">
              <Wrench className="w-10 h-10 text-red-600 mb-2" />
              <span className="font-semibold title-font text-gray-700">MACHINERY</span>
              <span className="mt-1 text-gray-500 text-sm">15+ Units</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Advanced CNC and Laser Cutting</h2>
              <p className="leading-relaxed">
                With advanced CNC bending and laser cutting machines, our facility ensures high-precision manufacturing and consistent quality across every batch — supporting everything from prototyping to high-volume production. We are continuously upgrading our equipment with new technologies to meet evolving industry demands
              </p>
              <p className="leading-relaxed mt-2">
                {/* We are continuously upgrading our machine line-up to include fiber lasers, tube bending, and robotic welding — positioning ourselves for future demands. */}
              </p>
              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Learn More</button>
            </div>
          </div>

          {/* Infrastructure Block 2 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-red-600 mb-2" />
              <span className="font-semibold title-font text-gray-700">QUALITY CONTROL</span>
              <span className="mt-1 text-gray-500 text-sm">ISO Certified</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">In-house Testing & Inspection</h2>
              <p className="leading-relaxed">
                From digital vernier and height gauges to in-process inspection stations, our quality control system ensures compliance with strict tolerances. Our processes are certified and documented for traceability and reliability.
              </p>
              <p className="leading-relaxed mt-2">
                With implementation of 5S, Kaizen, and internal audits, we’ve built a culture of quality excellence within every department.
              </p>
              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Learn More</button>
            </div>
          </div>

          {/* Infrastructure Block 3 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center text-center">
              <Warehouse className="w-10 h-10 text-red-600 mb-2" />
              <span className="font-semibold title-font text-gray-700">FACILITY</span>
              <span className="text-sm text-gray-500">10,000+ sq.ft</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Spacious Industrial Setup</h2>
              <p className="leading-relaxed">
                Located in Peenya Industrial Area, our facility is optimized for efficient workflow, material handling, and safety. With dedicated areas for fabrication, assembly, quality checks, and packaging, we deliver smooth operations end-to-end.
              </p>
              <p className="leading-relaxed mt-2">
                Future-ready infrastructure with plans to implement IoT tracking, MES systems, automated sheet handling and energy monitoring to align with Industry 4.0 standards.
              </p>
              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Learn More</button>
            </div>
          </div>



          {/* Infrastructure Block 5 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center text-center">
              <Layers3 className="w-10 h-10 text-red-600 mb-2" />
              <span className="font-semibold title-font text-gray-700">EXPANSION</span>
              <span className="text-sm text-gray-500">Vision 2027</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Facility & Customer Growth</h2>
              <p className="leading-relaxed">
                We are planning an expansion to a 5,0000+ sq.ft dedicated facility to support global OEM supply growth, aiming to scale operations for higher volumes and a more diverse client be base, while targeting IATF certification, ESG compliance, and long-term partnerships with high-performing enterprise clients.
              </p>
              <p className="leading-relaxed mt-2">

              </p>
              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Learn More</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Infrastructure;