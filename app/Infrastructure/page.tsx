import React from 'react'

function Infrastructure() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">

      <div className="container px-5 py-10 mx-auto">

        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Infrastructure</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Hear directly from our clients and partners about their experience with MAC — from our precision-driven processes to our commitment to quality, reliability, and long-term collaboration.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>
        <div className="-my-8 divide-y-2 divide-gray-100">

          {/* Infrastructure Block 1 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">MACHINERY</span>
              <span className="mt-1 text-gray-500 text-sm">15+ Units</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Advanced CNC and Laser Cutting</h2>
              <p className="leading-relaxed">
                Equipped with CNC Bending, CNC Turret Punch, and Laser Cutting machines, our facility ensures high-precision manufacturing with consistent quality for every batch. We support prototyping to high-volume production.
              </p>
              <a className="text-red-500 inline-flex items-center mt-4">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Infrastructure Block 2 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">QUALITY CONTROL</span>
              <span className="mt-1 text-gray-500 text-sm">ISO Certified</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">In-house Testing & Inspection</h2>
              <p className="leading-relaxed">
                From digital vernier and height gauges to in-process inspection stations, our quality control system ensures compliance with strict tolerances. Our processes are certified and documented for traceability and reliability.
              </p>
              <a className="text-red-500 inline-flex items-center mt-4">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Infrastructure Block 3 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">FACILITY</span>
              <span className="text-sm text-gray-500">10,000+ sq.ft</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Spacious Industrial Setup</h2>
              <p className="leading-relaxed">
                Located in Peenya Industrial Area, our facility is optimized for efficient workflow, material handling, and safety. With dedicated areas for fabrication, assembly, quality checks, and packaging, we deliver smooth operations end-to-end.
              </p>
              <a className="text-red-500 inline-flex items-center mt-4">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Infrastructure
