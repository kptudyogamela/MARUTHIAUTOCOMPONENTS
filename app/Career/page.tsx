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
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
            Careers at Maruthi Auto Components
          </h1>
          <p className="text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto">
            Join a team where quality, growth, and innovation are part of everyday work. We value skill, discipline, and continuous improvement across all departments.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Work With Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Zero-defect culture with strong technical supervision</li>
            <li>Access to state-of-the-art machinery (TRAUB, CNC, Laser Cutting, etc.)</li>
            <li>Supportive and experienced leadership</li>
            <li>Regular employee training and skill development</li>
            <li>Safe, organized workspace with 5S and Kaizen practices</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Open Positions</h2>
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
          <h2 className="text-xl font-medium text-gray-800 mb-2">How to Apply</h2>
          <p className="text-gray-600 mb-4">
            Send your updated resume to{' '}
            <a href="mailto:hr@mac-india.in" className="text-red-500 underline">
              hr@mac-india.in
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

