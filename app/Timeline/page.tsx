import React from 'react'

function Timeline() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">

          {/* Timeline List */}
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">

            {/* 2013: Foundation */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 inline-flex items-center justify-center text-white relative z-10">
                <span className="text-sm font-bold">13</span>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Establishment</h2>
                <p className="leading-relaxed">MAC was established in Peenya Industrial Area with 8 employees and basic machinery for turned components.</p>
              </div>
            </div>

            {/* 2016: Laser Tech */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 inline-flex items-center justify-center text-white relative z-10">
                <span className="text-sm font-bold">16</span>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Technology Upgrade</h2>
                <p className="leading-relaxed">Installed 3kW laser cutting machine & CNC bending machine to offer sheet metal fabrication and job work.</p>
              </div>
            </div>

            {/* 2019: Certification */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 inline-flex items-center justify-center text-white relative z-10">
                <span className="text-sm font-bold">19</span>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">ISO Certified</h2>
                <p className="leading-relaxed">Achieved ISO certification and adopted 5S, QMS, and Lean practices for consistent process improvement.</p>
              </div>
            </div>

            {/* 2023: Client Expansion */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 inline-flex items-center justify-center text-white relative z-10">
                <span className="text-sm font-bold">23</span>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">New Clients Onboarded</h2>
                <p className="leading-relaxed">Indo Autotech, Havells, Rittal India, and Surin Automotive added to client base. Focus on assembly and component kits.</p>
              </div>
            </div>

            {/* 2025: Infrastructure Boost */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 inline-flex items-center justify-center text-white relative z-10">
                <span className="text-sm font-bold">25</span>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Infrastructure Expansion</h2>
                <p className="leading-relaxed">Planned investment in high-tonnage CNC machines, warehouse automation, and IoT-enabled tracking systems.</p>
              </div>
            </div>

            {/* 2027: Global OEM Supply */}
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 inline-flex items-center justify-center text-white relative z-10">
                <span className="text-sm font-bold">27</span>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Vision 2027</h2>
                <p className="leading-relaxed">Expand operations with new plant, supply to Tier-1 global OEMs, and digitize manufacturing with smart industry 4.0 solutions.</p>
              </div>
            </div>
          </div>

          {/* Image / Banner */}
          {/* <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="/Images/timeline-banner.jpg" // Replace with your actual image
            alt="timeline"
          /> */}

          <div className="lg:w-3/5 md:w-1/2 rounded-lg overflow-hidden md:mt-0 mt-12">
            <video
              className="w-full h-200 object-cover rounded-lg"
              src="/Images/videos/6.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

        </div>
      </div>
    </section>

  )
}

export default Timeline
