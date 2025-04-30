const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Testimonials</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Hear directly from our clients and partners about their experience with MAC — from our precision-driven processes to our commitment to quality, reliability, and long-term collaboration.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {/* Testimonial Card 1 */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/Images/testimonials/testi1.png"
              />
              <p className="leading-relaxed">
                We’ve been working with MAC for over 5 years now. Their commitment to zero-defect delivery and on-time production is unmatched.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                RAHUL DESAI
              </h2>
              <p className="text-gray-500">Procurement Manager, Indo Auto Tech Ltd</p>
            </div>
          </div>
          {/* Testimonial Card 2 */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/Images/testimonials/testi4.png"
              />
              <p className="leading-relaxed">
                MAC’s professionalism and quick response to design changes have been a great support in our product development timelines.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                SHILPA NARAYAN
              </h2>
              <p className="text-gray-500">Sr. Design Engineer, Rittal India Ltd</p>
            </div>
          </div>
          {/* Testimonial Card 3 */}
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/Images/testimonials/testi3.png"
              />
              <p className="leading-relaxed">
                From foundation bolts to custom assemblies, MAC has always delivered high-precision components that meet specifications.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                KIRAN SHETTY
              </h2>
              <p className="text-gray-500">Operations Head, Badve Engineering Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
