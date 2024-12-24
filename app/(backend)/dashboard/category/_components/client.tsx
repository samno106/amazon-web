"use client"

import { useCategoryCreateModal } from "@/hooks/backend/modals/category/use-category-create-modal";
import { Zap } from "lucide-react";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { usePathname } from "next/navigation";

interface CategoryClientProps{
  data:CategoryColumn[]
}

export const CategoryClient = ({data}:CategoryClientProps)=>{

    const createCategoryModal = useCategoryCreateModal();
    const pathname = usePathname();
  
    return(
      <div>
        <div className="flex items-center justify-between mt-2 ">
          <h3 className="capitalize font-medium">{pathname.split("/")[2]}</h3>
          <button type="button" onClick={createCategoryModal.onOpen}  className=" shadow-sm hover:bg-slate-50 border border-slate-200 text-[11px] flex items-center space-x-1 px-3.5 py-1.5 rounded-md">
            <Zap className="size-3"/>
            <span className=" font-medium">New</span>
          </button>
        </div>
        <div className="container mx-auto pb-5">
        <DataTable columns={columns} data={data} searchKey="name" />
      </div>
      </div>
    )
}
export default CategoryClient