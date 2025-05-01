import React from 'react'

function Achievements() {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Targets & Achievements</h1>
          <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500">
            Our journey of consistent growth, timely investments, and customer satisfaction milestones over the years.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 text-left text-sm text-gray-700 shadow-md rounded-lg">
            <thead className="bg-red-100 text-gray-700 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3 border-b border-gray-300">Year</th>
                <th className="px-6 py-3 border-b border-gray-300">Target</th>
                <th className="px-6 py-3 border-b border-gray-300">Achievement</th>
                <th className="px-6 py-3 border-b border-gray-300">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">2013</td>
                <td className="px-6 py-4">Company Establishment</td>
                <td className="px-6 py-4">Successfully registered and began operations with 8 employees</td>
                <td className="px-6 py-4">Start of MAC</td>
              </tr>
              <tr>
                <td className="px-6 py-4">2016</td>
                <td className="px-6 py-4">Introduce Laser Cutting</td>
                <td className="px-6 py-4">Installed 3kW laser cutting & CNC bending machines</td>
                <td className="px-6 py-4">Tech upgrade</td>
              </tr>
              <tr>
                <td className="px-6 py-4">2019</td>
                <td className="px-6 py-4">ISO Certification</td>
                <td className="px-6 py-4">Achieved ISO & adopted 5S, QMS standards</td>
                <td className="px-6 py-4">Process improvement</td>
              </tr>
              <tr>
                <td className="px-6 py-4">2023</td>
                <td className="px-6 py-4">Expand Client Base</td>
                <td className="px-6 py-4">Onboarded Indo Autotech, Havells, Rittal India</td>
                <td className="px-6 py-4">Client growth</td>
              </tr>
              <tr>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">Infrastructure Expansion</td>
                <td className="px-6 py-4">Planned: Smart machines, IoT integration, warehouse automation</td>
                <td className="px-6 py-4">Planned</td>
              </tr>
              <tr>
                <td className="px-6 py-4">2027</td>
                <td className="px-6 py-4">Supply to Global OEMs</td>
                <td className="px-6 py-4">Planned: New plant setup and global Tier-1 OEM entry</td>
                <td className="px-6 py-4">Vision 2027</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Achievements
