// pages/contact.js
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Maruthi Auto Components</title>
      </Head>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left Side: Map + Contact Info */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6 slide-left">
              {/* Map */}
              <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  title="map"
                  src="https://maps.google.com/maps?q=Maruthi%20Auto%20Components%2C%20Peenya%2C%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.6)' }}
                ></iframe>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                  <div className="md:w-1/2">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mb-1">ADDRESS</h2>
                    <p>
                      Site No 3, Raghavendra Industrial Estate,<br />
                      Peenya 2nd Stage, Bangalore - 560058
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mb-1">EMAIL</h2>
                    <a href="mailto:maruthiautocomponents@gmail.com" className="text-red-500 block mb-2">
                      maruthiautocomponents@gmail.com
                    </a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mb-1">PHONE</h2>
                    <p>93437 77577 / 90082 34224</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md slide-right">
              <h2 className="text-gray-900 text-lg mb-2 font-medium title-font">Send a Message</h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Reach out for business enquiries, job work, or product questions.
              </p>
              <form action="https://formspree.io/f/yourFormID" method="POST">
                {/* Replace 'yourFormID' with the Formspree endpoint */}
                <div className="mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 transition duration-200 ease-in-out"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 transition duration-200 ease-in-out"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg"
                >
                  Submit
                </button>
                <p className="text-xs text-gray-500 mt-3">We usually respond within 24 hours on working days.</p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
