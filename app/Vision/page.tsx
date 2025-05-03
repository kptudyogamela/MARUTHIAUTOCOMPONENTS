import React from 'react'

function Vision() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">

          {/* Vision Card */}
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l9 4-9 4-9-4 9-4z" />
                  <path d="M3 10l9 4 9-4" />
                  <path d="M3 14l9 4 9-4" />
                  <path d="M3 18l9 4 9-4" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Our Vision</h2>
                <p className="leading-relaxed text-base">
                  To be a benchmark in the precision component industry by delivering consistent quality, embracing lean manufacturing, and becoming the preferred partner for global OEMs—primarily in the automotive sector, while also serving the electrical and mechanical industries.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Our Mission</h2>
                <p className="leading-relaxed text-base">
                  To manufacture high-quality, precision-engineered components for the automotive industry, driven by technology and skilled manpower—while upholding customer satisfaction, continuous improvement, and strict adherence to quality management systems.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Vision
