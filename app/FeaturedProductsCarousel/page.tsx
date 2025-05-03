'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const products = [
  { title: 'Tie Rod', image: '/Images/products/p1.jpeg' },
  { title: 'Anchor Bolt', image: '/Images/products/p2.jpeg' },
  { title: 'Corner Piece', image: '/Images/products/p3.jpeg' },
  { title: 'Laser Cut Frame', image: '/Images/products/p4.jpeg' },
  { title: 'CNC Bent Tube', image: '/Images/products/p2.jpeg' },
  { title: 'Profiled Rod', image: '/Images/products/p3.jpeg' },
];

export default function FeaturedProductsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="py-1 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"> Featured Products</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            A glimpse into our core offerings — trusted, tested, and tailored to meet the evolving needs of top-tier 1 & 2 manufacturers.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="min-w-[250px] max-w-sm bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-4 text-center"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="rounded-md object-cover mx-auto"
                />
                <h3 className="mt-4 font-semibold text-gray-700">{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
