import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"

const HeroCarousel=()=>{

return(
    <div className="flex justify-center h-auto">
    <Carousel className="w-[100%]">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="p-0">
          <div className="bg-clip-content bg-gradient-to-t from-white to-transparent bg-lime-400 h-[420px]">
            
             {/* <Image src={'https://images.unsplash.com/photo-1666782199657-09885cc1c088'} width={100} height={100} alt="banner"/> */}
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className=" absolute top-[50%] left-0">
        <ChevronLeft/>
    </CarouselPrevious>
    <CarouselNext className=" absolute top-[50%] right-0" />
  </Carousel>

  </div>
)
}

export default HeroCarousel