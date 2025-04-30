
import Certification from "./Certification/Page";
import FeaturedProductsCarousel from "./FeaturedProductsCarousel/page";
import HeroSection from "./Herosection/page";
import Stats from "./Stats/page";
import Testimonials from "./Testimonial/page";
import TrustedByGrid from "./Trustedby/page";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <Stats />
      <TrustedByGrid />
      <Certification />
      <FeaturedProductsCarousel />
      <Testimonials />
    </div>
  );
}
