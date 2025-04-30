

const services = [
  {
    category: 'PRECISION ENGINEERING',
    title: 'Turning, Drilling & Chamfering',
    description:
      'High-accuracy operations on auto components using TRAUB and specialized machines for turning, drilling, threading, and chamfering.',
    image: 'https://dummyimage.com/720x400/1e3a8a/ffffff&text=Turning+Operations',
  },
  {
    category: 'FABRICATION',
    title: 'Laser Cutting & CNC Bending',
    description:
      'Advanced laser cutting (3KW) and CNC bending (110T) services for both automotive and non-automotive fabrication needs.',
    image: 'https://dummyimage.com/721x401/2563eb/ffffff&text=Laser+Cutting',
  },
  {
    category: 'STRUCTURAL PARTS',
    title: 'Thread Rolling & Foundation Bolts',
    description:
      'Manufacture and supply of custom foundation bolts, tie rods, and slag rods using high-strength thread rolling and reduction machines.',
    image: 'https://dummyimage.com/722x402/1d4ed8/ffffff&text=Threading+Bolts',
  },
];

const ServicesSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Services</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Specializing in high-precision auto components and fabricated parts, MAC delivers zero-defect manufacturing solutions using advanced machinery including laser cutting and CNC bending.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <div className="p-4 md:w-1/3" key={index}>
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={service.image}
                  alt={service.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {service.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {service.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{service.description}</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
