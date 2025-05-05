import React from 'react';

function Stats() {
  const stats = [
    { icon: '📅', value: '2013', label: 'Established' },
    { icon: '👷', value: '30+', label: 'Employees' },
    { icon: '⚙️', value: '45+', label: 'Machines' },
    { icon: '🛠', value: '35+ yrs', label: 'Industry Experience' },
    { icon: '🧪', value: 'Metrics', label: 'Internal - below 100 ppm | Customer end - 0 ppm ' },
    { icon: '🧾', value: 'ISO Certified', label: 'Quality Standard' },
    { icon: '🏗', value: '₹6 to ₹8 Crore', label: 'Turn Over Annually' },
    { icon: '👨‍🏫', value: '1+/month', label: 'Employee Trainings' },
    { icon: '🏭', value: '8200+ sq ft', label: 'Manufacturing Area' },
    {
      icon: '🏭',
      value: '50000+ sq ft',
      label: 'Future Expansion @ Japanese Park'
    },
    { icon: '🤝', value: '7+', label: 'Major Clients' },
    { icon: '🔄', value: '5S + Kaizen', label: 'Workplace Culture' },
  ];

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 py-15">
        <div className="text-center mb-16">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Quick Company Stats
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            A snapshot of MAC journey, capabilities, and operational excellence — highlighting our growth, infrastructure, quality focus, and trusted industry presence.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
            >
              <div className="text-3xl mb-3 text-red-600">{stat.icon}</div>
              <h3 className="text-xl font-extrabold text-gray-900">{stat.value}</h3>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
