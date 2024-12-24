
import { prisma } from "@/lib/prisma.db";
import CategoryClient from "./_components/client";
import { CategoryColumn } from "./_components/columns";
import moment from "moment";

export const CategoryPage = async () => {

  const categories = await prisma.category.findMany({
    include:{
      parent:true,
      children:true
    }
  });

  const dataFormat:CategoryColumn[] = categories.map((item:any)=>({
    id:item.id,
    name:item.name,
    slug:item.slug,
    parent:item.parent?.name ?? "--/--",
    createdAt:moment(item.createdAt).format("LL")
  }));

    
    return (
      <div>
        <CategoryClient data={dataFormat} />
      </div>
    );
  };
  export default CategoryPage;
  