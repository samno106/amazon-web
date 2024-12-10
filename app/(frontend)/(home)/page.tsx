
import FeatureProduct from "./_components/feature-product/feature-product";
import HeroCarousel from "./_components/hero-carousel/hero-carousel";

const featureProducts =[
  {
    title:"Gaming accessories",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjV2cGEGw_HahwhAM3hYq7FirsRHAlPAU52w&s",
    code:"gaming-accessory",
    button:"Shop now",
  },
  {
    title:"Gaming accessories",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjV2cGEGw_HahwhAM3hYq7FirsRHAlPAU52w&s",
    code:"gaming-accessory",
    button:"Shop now",
  },
  {
    title:"Gaming accessories",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjV2cGEGw_HahwhAM3hYq7FirsRHAlPAU52w&s",
    code:"gaming-accessory",
    button:"Shop now",
  },
  {
    title:"Gaming accessories",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjV2cGEGw_HahwhAM3hYq7FirsRHAlPAU52w&s",
    code:"gaming-accessory",
    button:"Shop now",
  },
  {
    title:"Gaming accessories",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjV2cGEGw_HahwhAM3hYq7FirsRHAlPAU52w&s",
    code:"gaming-accessory",
    button:"Shop now",
  },
  {
    title:"Gaming accessories",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjV2cGEGw_HahwhAM3hYq7FirsRHAlPAU52w&s",
    code:"gaming-accessory",
    button:"Shop now",
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen h-[1200px] bg-slate-100">
      {/* hero carousel */}
      <section>
        <HeroCarousel/>
      </section>
      {/* feature products     */}
      <section className="px-10 -mt-44">
        <FeatureProduct products={featureProducts}/>
      </section>
    </div>
  );
};
export default HomePage;
