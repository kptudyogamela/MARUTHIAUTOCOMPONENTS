'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const products = [
  { title: 'Corner Piece', image: '/Images/products/1.png' },
  { title: 'Anchor Bolts', image: '/Images/products/2.jpg' },
  { title: 'Construction images - bolts', image: '/Images/products/con2.jpg' },
  { title: 'Headed Bolts', image: '/Images/products/3.jpg' },
  { title: 'Tubular parts', image: '/Images/products/tub2.jpg' },
  { title: 'Turned Parts', image: '/Images/products/4.jpg' },
  { title: 'Construction images - bolts ', image: '/Images/products/con3.jpg' },
  { title: 'Tubular Parts', image: '/Images/products/5.jpg' },
  { title: 'Assembly Parts', image: '/Images/products/6.jpg' },
  { title: 'Tubular parts', image: '/Images/products/tub3.jpg' },
  { title: 'Bolt Cushions', image: '/Images/products/7.jpg' },
  { title: 'Turned Parts', image: '/Images/products/tur2.jpg' },
  { title: 'CNC Bending Parts', image: '/Images/products/8.jpg' },
  { title: 'Tie Rods', image: '/Images/products/9.jpg' },
  { title: 'Construction images - bolts', image: '/Images/products/con1.jpg' }, ,
  { title: 'Tubular parts', image: '/Images/products/tub1.jpg' },
  { title: 'Turned Parts', image: '/Images/products/tur1.jpg' },
];

export default function FeaturedProductsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 mb-4">Featured Products</h1>
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
                <div className="w-full aspect-[4/3] relative rounded-md overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-gray-700">{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
