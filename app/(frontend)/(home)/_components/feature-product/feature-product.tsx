import Link from "next/link";

interface FeatureProduct{
    title:string;
    image:string;
    code:string;
    button:string;
}

interface FeatureProductProps{
    products:FeatureProduct[]
}

const FeatureProduct=({products}:FeatureProductProps)=>{
    return (
        <div className="grid grid-cols-3 gap-8">
            {
                products.map((product,index)=>(
                <div key={index} className="px-4 py-4 bg-white shadow z-10">
                    <h3 className="text-lg font-medium">{product.title}</h3>
                    <div className="w-full flex justify-center py-2 my-2">
                    <img src={product.image} className=" max-w-full" alt="" />
                    </div>
                    <Link href={product.code} className="mt-2 text-sm font-medium text-blue-500 hover:text-blue-400">
                        {product.button}
                    </Link>
                </div>
                ))
            }
            
        </div>
    );
}

export default FeatureProduct