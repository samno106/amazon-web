import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface FeatureProduct {
  title: string;
  image: string;
  code: string;
  button: string;
}

interface FeatureProductProps {
  products: FeatureProduct[];
}

const FeatureProduct = ({ products }: FeatureProductProps) => {
  return (
    <div className="grid grid-cols-4 gap-5 ">
      {products.map((product, index) => (
        <Card key={index} className="z-10 border-none rounded-none">
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={product.image}
              className="h-[100%] w-[100%] min-h-[250px] max-h-dvh object-cover"
              alt=""
            />
          </CardContent>
          <CardFooter>
            <Link
              href={product.code}
              className="text-sm  text-blue-500 hover:text-blue-400"
            >
              {product.button}
            </Link>
          </CardFooter>
        </Card>
        // <div key={index} className="px-5 py-4 bg-white shadow z-10 relative">
        //   <h3 className="text-lg font-medium">{product.title}</h3>
        //   <div className="w-full flex-1 flex-grow-1 justify-center py-2 my-2 h-[275px] border mb-[30px]">
        //     <img
        //       src={product.image}
        //       className="h-[100%] w-[100%] object-cover"
        //       alt=""
        //     />
        //   </div>
        //   <div className=" absolute inset-y-0 bottom-0">
        //     <Link
        //       href={product.code}
        //       className="mt-2 text-sm font-medium text-blue-500 hover:text-blue-400"
        //     >
        //       {product.button}
        //     </Link>
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default FeatureProduct;
