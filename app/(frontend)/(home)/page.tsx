import { Button } from "@/components/ui/button";
import HeroCarousel from "./_components/hero-carousel/hero-carousel";

const HomePage = () => {
  return (
    <div>
      {/* hero carousel */}
      <section className=" relative">
        <HeroCarousel/>
        
      </section>     
    </div>
  );
};
export default HomePage;
