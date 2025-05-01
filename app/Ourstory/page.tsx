import React from 'react'

function Ourstory() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Story</h1>
            <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500">
              <strong>Maruthi Auto Components</strong> (MAC) was founded on <strong>10th May 2013</strong> in Peenya Industrial Area, Bangalore. Starting with just 8 employees, the company has grown steadily and today employs over 25 skilled professionals.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
            </div>
          </div>
          {/* Image Banner */}
          {/* <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="Maruthi Auto Components"
              className="object-cover object-center h-full w-full"
              src="/Images/ourstory-cover.jpg" // Replace with your real image
            />
          </div> */}

          <div className="rounded-lg overflow-hidden">
            <video
              className="w-full h-64 object-cover"
              src="/Images/videos/4.mp4" // 🔁 Your actual video path here
              autoPlay
              muted
              loop
              playsInline
            />
          </div>


          {/* Content */}
          <div className="flex flex-col sm:flex-row mt-10">
            {/* Founder Info */}
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                <img
                  alt="Mr. Siddagangappa"
                  src="/Images/team/team1.png" // ✅ Ensure this path is correct
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center mt-4">
                <h2 className="font-medium title-font text-gray-900 text-lg">
                  Mr. Siddagangappa
                </h2>
                <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  CEO & Founder <br />
                  35+ years in Automotive Industry <br />
                  Expert in QMS, NPD, 5S & Production Systems
                </p>
              </div>
            </div>


            {/* Story Text */}
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-justify text-lg mb-4">

                We specialize in the manufacturing of precision auto-turned components and tubular parts including tie rods, slag rods, and foundation bolts. Our infrastructure includes Laser Cutting (3kW), CNC Bending (110T), and in-house machining like turning, drilling, threading, and chamfering.
                <br /><br />
                {/* MAC is ISO certified and driven by lean principles, Kaizen, 5S, and QMS. Our team has a deep understanding of automats, electrical, and mechanical components — offering both <strong>mass production</strong> and <strong>custom job work</strong> capabilities.
                <br /><br /> */}
                From humble beginnings to becoming a trusted supplier to brands like Indo Autotech, Havells, Surin Automotive, and Rittal India, our journey reflects commitment, consistency, and quality without compromise.
              </p>
              <a href="/about" className="text-red-500 inline-flex items-center hover:underline">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
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

export default Ourstory
