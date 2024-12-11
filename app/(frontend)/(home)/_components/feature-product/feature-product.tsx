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
    <div className="grid grid-cols-2 md:grid-cols-4  gap-5 ">
      {products.map((product, index) => (
        <Card key={index} className="z-10 border-none rounded-none">
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={product.image}
              className="h-[100%] w-[100%] md:min-h-[250px] max-h-dvh object-cover"
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
      ))}
    </div>
  );
};

export default FeatureProduct;
