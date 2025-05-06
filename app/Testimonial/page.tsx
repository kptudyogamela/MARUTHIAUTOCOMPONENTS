'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const testimonialsData = [
  {
    name: "Vinod Raheja ",
    role: "Vice President, Nahars Engineering",
    message:
      "In *Maruthi Auto Components* all team members always work as a family & produce all products 100%  Defect Free . Ensure In-Time Supply Chain to all their customers . Keep It Up !!!.",
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
    name: "MAHESHA",
    role: "Deputy General Maneger, Metal Man, Hosur",
    message:
      "From foundation bolts to custom assemblies, MAC has always delivered high-precision components that meet specifications.",
    image: "/Images/testimonials/4.jpg",
  },
  {
    name: "ANAND",
    role: "General Manager, Purchase, Badve Engineering",
    message:
      "Maruthi Auto Components, with over 35 years of experience, is a leader in high-precision machining and auto parts, serving top OEMs. Under the dynamic leadership of MD Mr. Siddagangappa, the company has embraced advanced technologies and quality standards, achieving remarkable growth. Wishing him continued success in all future ventures.",
    image: "/Images/testimonials/7.jpg",
  },
  {
    name: "V MANOGARAN- Pending",
    role: "Manager, Purchase, Swastid Engineing Pvt Ltd",
    message:
      "From foundation bolts to custom assemblies, MAC has always delivered high-precision components that meet specifications.",
    image: "/Images/testimonials/5.jpg",
  },
  {
    name: "Rodrigue Mark- Pending",
    role: "Deputy Manager, Havells India Pvt Ltd",
    message:
      "From foundation bolts to custom assemblies, MAC has always delivered high-precision components that meet specifications.",
    image: "/Images/testimonials/7.jpg",
  },
  {
    name: "Kumar MD",
    role: "General Manager, Operations, Balmer Lawrie Van Leer  Ltd",
    message:
      "I sincerely appreciate Maruti Industries' commitment to lean manufacturing. It's clearly driving greater efficiency, improving quality, and reducing waste—positioning the company as a leader in process optimization. Truly commendable!",
    image: "/Images/testimonials/10.jpg",
  },
  {
    name: "Vishweshwara Prasad",
    role: "General Manager, JHY Industries.",
    message:
      "I wanted to express my sincere appreciation for Maruti Industries' commitment to and execution of a lean manufacturing system. It's evident that this approach is fostering significant improvements in efficiency and likely contributing to enhanced quality and reduced waste. This dedication to lean principles not only benefits the company's operations but also positions Maruti Industries as a leader in optimizing processes within the industry. It's truly commendable!",
    image: "/Images/testimonials/9.jpg",
  },
];



const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-4 mx-auto">
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

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[90%] md:min-w-[48%] bg-white shadow-md rounded-lg p-6"
              >
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={testimonial.image}
                  />
                  <p className="leading-relaxed text-sm md:text-base">{testimonial.message}</p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                  <h2 className="text-gray-900 font-semibold tracking-wide text-sm">
                    {testimonial.name}
                  </h2>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;