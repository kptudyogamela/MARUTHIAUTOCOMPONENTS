const testimonialsData = [
  {
    name: "Vinod Raheja ",
    role: "Vice President, Nahars Engineering",
    message:
      "We’ve been working with MAC for over 13 years now. Their commitment to zero-defect delivery and on-time production is unmatched.",
    image: "/Images/testimonials/5.jpg",
  },
  {
    name: "VENU",
    role: "Assistant Manager, Indo Auto Tech Ltd",
    message:
      "We’ve been working with MAC for over 13 years now. Their commitment to zero-defect delivery and on-time production is unmatched.",
    image: "/Images/testimonials/6.png",
  },

  {
    name: "ANAND",
    role: "Director, Sourcing and Procurement, Rittal India Ltd",
    message:
      "We are pleased to present Maruthi Auto Components with a Certificate of Appreciation for their consistent quality, reliability, and professional service. Their contribution has been invaluable, and this recognition is a token of our gratitude.",
    image: "/Images/testimonials/2.jpg",
  },
  {
    name: "GIRISH",
    role: "General Manager, Quality, Rittal India Ltd",
    message: "We’ve been working with MAC for over 06 years now.",
    image: "/Images/testimonials/3.jpg",
  },
  {
    name: "NAVEEN SHETTY",
    role: "Operations Head, Mungo Fixings India Pvt. Ltd",
    message:
      "From foundation bolts to custom assemblies, MAC has always delivered high-precision components that meet specifications.",
    image: "/Images/testimonials/4.jpg",
  },
  {
    name: "ANAND",
    role: "General Manager, Purchase, Badve Engineering",
    message:
      "From foundation bolts to custom assemblies, MAC has always delivered high-precision components that meet specifications.",
    image: "/Images/testimonials/7.jpg",
  },
  {
    name: "V MANOGARAN",
    role: "Manager, Purchase, Swastid Engineing Pvt Ltd",
    message:
      "From foundation bolts to custom assemblies, MAC has always delivered high-precision components that meet specifications.",
    image: "/Images/testimonials/5.jpg",
  },
  {
    name: "Rodrigue Mark",
    role: "Deputy Manager, Havells India Pvt Ltd",
    message:
      "From foundation bolts to custom assemblies, MAC has always delivered high-precision components that meet specifications.",
    image: "/Images/testimonials/7.jpg",
  },
  {
    name: "Rodrigue Mark",
    role: "Deputy Manager, Havells India Pvt Ltd",
    message:
      "From foundation bolts to custom assemblies, MAC has always delivered high-precision components that meet specifications.",
    image: "/Images/testimonials/10.jpg",
  },
  {
    name: "Kumar M D",
    role: "General Manager, Balmer Lawrie Van Leer Limited.",
    message:
      "I wanted to express my sincere appreciation for Maruti Industries' commitment to and execution of a lean manufacturing system. It's evident that this approach is fostering significant improvements in efficiency and likely contributing to enhanced quality and reduced waste. This dedication to lean principles not only benefits the company's operations but also positions Maruti Industries as a leader in optimizing processes within the industry. It's truly commendable!",
    image: "/Images/testimonials/9.jpg",
  },
];


const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Testimonials
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Hear directly from our clients and partners about their experience
            with MAC — from our precision-driven processes to our commitment to
            quality, reliability, and long-term collaboration.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={testimonial.image}
                />
                <p className="leading-relaxed">{testimonial.message}</p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {testimonial.name}
                </h2>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
