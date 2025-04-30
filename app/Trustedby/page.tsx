'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const customers = [
  { name: 'Indo Autotech', logo: '/Images/logo1.png' },
  { name: 'Havells', logo: '/Images/logo2.png' },
  { name: 'Surin Automotive', logo: '/Images/logo3.png' },
  { name: 'Rittal India', logo: '/Images/logo4.png' },
  { name: 'Badve Engineering', logo: '/Images/logo5.png' },
  { name: 'Nahars Engineering', logo: '/Images/logo6.png' },
  { name: 'Indo Autotech', logo: '/Images/logo1.png' },
  { name: 'Havells', logo: '/Images/logo2.png' },
  { name: 'Surin Automotive', logo: '/Images/logo3.png' },
  { name: 'Rittal India', logo: '/Images/logo4.png' },
  { name: 'Badve Engineering', logo: '/Images/logo5.png' },
  { name: 'Nahars Engineering', logo: '/Images/logo6.png' },
];

export default function TrustedByCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"> Trusted By</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Our clients includes some of the most respected names in the industry who count on us for uncompromising precision and quality
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-10 px-4">
            {customers.map((client, idx) => (
              <div
                key={idx}
                className="min-w-[150px] flex justify-center items-center"
              >
                <div className="relative w-[120px] h-[80px] sm:w-[150px] sm:h-[100px]">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 150px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
