import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const HeroCarousel=()=>{

return(
    <div className="flex justify-center h-auto">
    <Carousel className="w-[100%]">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="p-0">
          <div className="h-auto">
            <img src="Image.jfif" width={0} height={0} alt="Slider" className="w-full h-full hero-carousel-img"/>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious size={'lg'} className=" absolute top-[30%] left-2 h-20 w-10 px-0 rounded bg-white/55 border-none"/>
    <CarouselNext size={'lg'} className=" absolute top-[30%] right-2 h-20 w-10 px-0 rounded bg-white/55 border-none" />
  </Carousel>

  </div>
)
}

export default HeroCarousel