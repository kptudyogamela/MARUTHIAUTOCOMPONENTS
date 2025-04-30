import React from 'react'
import ClientsSection from '../OurClients/page'

function page() {
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Business Plans</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Specializing in high-precision auto components and fabricated parts, MAC delivers zero-defect manufacturing solutions using advanced machinery including laser cutting and CNC bending.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>
        <ClientsSection />
      </div>
    </div>
  )
}

export default page
