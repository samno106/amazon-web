"use client";

import { useEffect, useState } from "react";
import FeatureProduct from "./_components/feature-product/feature-product";
import HeroCarousel from "./_components/hero-carousel/hero-carousel";
import axios from "axios";

const featureProducts = [
  {
    title: "Gaming accessories",
    image:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_2x_EN._SY608_CB564799420_.jpg",
    code: "gaming-accessory",
    button: "Shop now",
  },
  {
    title: "Deals in PCs",
    image:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v1._SY608_CB573698005_.jpg",
    code: "gaming-accessory",
    button: "Shop now",
  },
  {
    title: "Delightful deals for everyone ",
    image:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/HolidayDeals/Fuji_Holiday_deals_Dashboard_card_2X._SY608_CB540780866_.jpg",
    code: "gaming-accessory",
    button: "Shop now",
  },
  {
    title: "Gaming accessories",
    image:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Smartphone_2x._SY232_CB566164844_.jpg",
    code: "gaming-accessory",
    button: "Shop now",
  },
  {
    title: "Gaming accessories",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjV2cGEGw_HahwhAM3hYq7FirsRHAlPAU52w&s",
    code: "gaming-accessory",
    button: "Shop now",
  },
  {
    title: "Gaming accessories",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjV2cGEGw_HahwhAM3hYq7FirsRHAlPAU52w&s",
    code: "gaming-accessory",
    button: "Shop now",
  },
  {
    title: "Gaming accessories",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjV2cGEGw_HahwhAM3hYq7FirsRHAlPAU52w&s",
    code: "gaming-accessory",
    button: "Shop now",
  },
  {
    title: "Gaming accessories",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjV2cGEGw_HahwhAM3hYq7FirsRHAlPAU52w&s",
    code: "gaming-accessory",
    button: "Shop now",
  },
];

const carousels = [
  {
    image: "https://m.media-amazon.com/images/I/71IHJLPGC2L._SX3000_.jpg",
    code: "s1",
  },
  {
    image: "https://m.media-amazon.com/images/I/71w+qp51UyL._SX3000_.jpg",
    code: "s2",
  },
  {
    image: "https://m.media-amazon.com/images/I/71k7R47IAIL._SX3000_.jpg",
    code: "s3",
  },
  {
    image: "https://m.media-amazon.com/images/I/71zpBcCjKPL._SX3000_.jpg",
    code: "s4",
  },
  {
    image: "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    code: "s5",
  },
];

const HomePage = () => {
  const [sliders, setSliders] = useState([]);

  const getSlider = () => {
    axios
      .get("http://localhost:1337/api/sliders?populate=*")
      .then(({ data }) => {
        setSliders(data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getSlider();
  }, []);
  return (
    <div className="min-h-screen h-[1200px] bg-slate-100">
      {/* hero carousel */}
      <section>
        <HeroCarousel heroCarousels={carousels} />
      </section>
      {/* feature products     */}
      <section className="md:px-10 md:-mt-60 px-3 -mt-10">
        <FeatureProduct products={featureProducts} />
      </section>
    </div>
  );
};
export default HomePage;
