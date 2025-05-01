import React from 'react'

const jobOpenings = [
  {
    title: 'CNC Operator',
    department: 'Production',
    location: 'Peenya, Bangalore',
    type: 'Full-Time',
  },
  {
    title: 'Quality Inspector',
    department: 'Quality Assurance',
    location: 'Peenya, Bangalore',
    type: 'Full-Time',
  },
  {
    title: 'Maintenance Technician',
    department: 'Maintenance',
    location: 'Peenya, Bangalore',
    type: 'Full-Time',
  },
  {
    title: 'Trainee – Mechanical Engineering',
    department: 'Engineering',
    location: 'Peenya, Bangalore',
    type: 'Internship',
  },
];

const CareersSection = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-10 mx-auto">

        <div className="text-center mb-2">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"> Careers at Maruthi Auto Components</h1>
          <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500">
            Join a team where quality, growth, and innovation are part of everyday work. We value skill, discipline, and continuous improvement across all departments.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>



        <h1 className="sm:text-2xl mx-15 text-2xl font-medium title-font mb-4 text-gray-900">Why Work With Us?</h1>
        <div className="text-gray-600 body-font">
          <div className="container px-5 py-2 mx-auto flex flex-wrap">

            <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">1</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-14 h-14 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Zero-Defect Culture</h2>
                  <p className="leading-relaxed">Work in an environment focused on quality and precision, backed by strong technical supervision.</p>
                </div>
              </div>
            </div>

            <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">2</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Advanced Machinery</h2>
                  <p className="leading-relaxed">Get hands-on experience with cutting-edge equipment including TRAUB, CNC, and Laser Cutting machines.</p>
                </div>
              </div>
            </div>

            <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">3</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Supportive Leadership</h2>
                  <p className="leading-relaxed">Join a team guided by experienced professionals dedicated to your success and growth.</p>
                </div>
              </div>
            </div>

            <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">4</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Training & Development</h2>
                  <p className="leading-relaxed">Benefit from regular upskilling programs and technical workshops to stay at the forefront of your field.</p>
                </div>
              </div>
            </div>

            <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">5</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M3 12h18M3 6h18M3 18h18"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Safe, Organized Workspace</h2>
                  <p className="leading-relaxed">Work in a clean and efficient environment driven by 5S and Kaizen methodologies.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mb-12">

          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Open Positions</h1>
            <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500">
              Our journey of consistent growth, timely investments, and customer satisfaction milestones over the years.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border border-gray-200">
              <thead className="bg-red-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2">Position</th>
                  <th className="px-4 py-2">Department</th>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Type</th>
                </tr>
              </thead>
              <tbody>
                {jobOpenings.map((job, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{job.title}</td>
                    <td className="px-4 py-2">{job.department}</td>
                    <td className="px-4 py-2">{job.location}</td>
                    <td className="px-4 py-2">{job.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">

          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">How to Apply</h1>
            <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500">
              Our journey of consistent growth, timely investments, and customer satisfaction milestones over the years.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Send your updated resume to{' '}
            <a href="mailto:maruthiautocomponents@gmail.com" className="text-red-500 underline">
              maruthiautocomponents@gmail.com
            </a>{' '}
            or visit our facility:<br />
            No 3, Raghavendra Industrial Estate, Phase 2, Peenya 2nd Stage, Bangalore – 560058
          </p>
          <a
            href="mailto:hr@mac-india.in"
            className="inline-flex items-center px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded text-lg"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;

