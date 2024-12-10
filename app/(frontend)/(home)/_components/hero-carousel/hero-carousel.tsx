import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroCarousel = ({ heroCarousels }: HeroCarouselModelProps) => {
  return (
    <div className="flex justify-center h-auto">
      <Carousel className="w-[100%]">
        <CarouselContent>
          {heroCarousels.map((carousel, index) => (
            <CarouselItem key={index} className="p-0">
              <div className="h-auto">
                <img
                  src={carousel.image}
                  width={0}
                  height={0}
                  alt="Slider"
                  className="w-full h-full hero-carousel-img object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          size={"lg"}
          className=" absolute top-[25%] left-2 h-20 w-10 px-0 rounded bg-white/55 border-none"
        />
        <CarouselNext
          size={"lg"}
          className=" absolute top-[25%] right-2 h-20 w-10 px-0 rounded bg-white/55 border-none"
        />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
