'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const products = [
  { title: 'Washers', image: '/Images/products/newprod/1.jpg' },
  { title: 'Washers', image: '/Images/products/newprod/2.jpg' },
  { title: 'Tie Rods ', image: '/Images/products/newprod/3.jpg' },
  { title: 'Tie Rods ', image: '/Images/products/newprod/4.jpg' },
  { title: 'Tie Rods ', image: '/Images/products/newprod/5.jpg' },
  { title: 'Tie Rods ', image: '/Images/products/newprod/6.jpg' },
  { title: 'Tie Rods ', image: '/Images/products/newprod/7.jpg' },
  { title: 'Construction Bolts ', image: '/Images/products/newprod/8.jpg' },
  { title: 'Construction Bolts ', image: '/Images/products/newprod/9.jpg' },
  { title: 'Construction Bolts ', image: '/Images/products/newprod/10.jpg' },
  { title: 'Construction Bolts ', image: '/Images/products/newprod/11.jpg' },
  { title: 'Corner Piece', image: '/Images/products/newprod/12.jpg' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/13.jpg' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/14.jpg' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/15.jpg' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/16.jpg' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/17.jpg' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/18.jpg' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/19.jpg' },
  { title: 'Nuts ', image: '/Images/products/newprod/20.jpg' },
  { title: 'Nuts ', image: '/Images/products/newprod/21.jpg' },
  { title: 'Plain Bolt ', image: '/Images/products/newprod/22.jpg' },
  { title: 'Plain Bolt ', image: '/Images/products/newprod/23.jpg' },
  { title: 'Plain Bolt ', image: '/Images/products/newprod/24.jpg' },
  { title: 'Pipes ', image: '/Images/products/newprod/25.jpg' },
  { title: 'Pipes ', image: '/Images/products/newprod/26.jpg' },
  { title: 'Pipes ', image: '/Images/products/newprod/27.jpg' },
  { title: 'Cross Member ', image: '/Images/products/newprod/28.jpg' },
  { title: 'Cross Member ', image: '/Images/products/newprod/29.jpg' },
  { title: 'Cross Member ', image: '/Images/products/newprod/30.jpg' },
  { title: 'Cross Member ', image: '/Images/products/newprod/31.jpg' },
  { title: 'Assembly Parts ', image: '/Images/products/newprod/32.jpg' },
  { title: 'Assembly Parts ', image: '/Images/products/newprod/33.jpg' },
  { title: 'Hexagon Headed Bolt ', image: '/Images/products/newprod/34.jpg' },
  { title: 'Hexagon Headed Bolt ', image: '/Images/products/newprod/35.jpg' },
  { title: 'Hexagon Headed Bolt ', image: '/Images/products/newprod/36.jpg' },
  { title: 'Tubular Pipes', image: '/Images/products/newprod/37.jpg' },
  { title: 'Tubular Pipes', image: '/Images/products/newprod/38.jpg' },
  { title: 'Hook Stand SPG', image: '/Images/products/newprod/39.jpg' },
  { title: 'Hook Stand SPG', image: '/Images/products/newprod/40.jpg' },
  { title: 'Collar ', image: '/Images/products/newprod/41.jpg' },
  { title: 'Collar ', image: '/Images/products/newprod/42.jpg' },
  { title: 'Collar ', image: '/Images/products/newprod/43.jpg' },
  { title: 'Tubular Part - Tractor Parts ', image: '/Images/products/newprod/44.jpg' },
  { title: 'Tubular Part - Tractor Parts ', image: '/Images/products/newprod/45.jpg' },
  { title: 'Tubular Part - Automotive Parts ', image: '/Images/products/newprod/46.jpg' },
  { title: 'Tubular Part - Automotive Parts ', image: '/Images/products/newprod/47.jpg' },
  { title: 'Tubular Part - Automotive Parts ', image: '/Images/products/newprod/48.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/49.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/50.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/51.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/52.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/53.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/54.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/55.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/56.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/57.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/58.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/59.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/60.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/61.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/62.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/63.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/64.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/65.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/66.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/67.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/68.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/69.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/70.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/71.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/72.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/73.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/74.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/75.jpg' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/76.jpg' },
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
    [Autoplay({ delay: 1000, stopOnInteraction: false })]
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
            {products?.map((product, idx) => (
              product ? (
                <div
                  key={idx}
                  className="min-w-[250px] max-w-sm bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-4 text-center"
                >
                  <div className="w-full aspect-[4/3] relative rounded-md overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src={product.image || "/placeholder.jpg"}
                      alt={product.title || "Product Image"}
                      fill
                      className="object-contain p-2" // Keep image cleanly visible and padded
                    />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-700">{product.title || "Untitled Product"}</h3>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
