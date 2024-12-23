"use client"

import { Input } from "@/components/ui/input";
import { useCategoryCreateModal } from "@/hooks/backend/modals/category/use-category-create-modal";
import { Search, Zap } from "lucide-react";

export const CategoryPage = () => {

  const createCategoryModal = useCategoryCreateModal();

    return (
      <div>
        <div className="flex items-center justify-between mt-2">
          <div className=" relative">
            <Search className="size-3 absolute top-2 left-2 text-gray-400"/>
            <Input className="h-6.5 pl-7 placeholder:text-[11px]" placeholder="Search..."/>
          </div>
          <button type="button" onClick={createCategoryModal.onOpen}  className=" shadow-sm hover:bg-slate-50 border border-slate-200 text-[11px] flex items-center space-x-1 px-3.5 py-1.5 rounded-md">
            <Zap className="size-3"/>
            <span className=" font-medium">New</span>
          </button>
        </div>
      </div>
    );
  };
  export default CategoryPage;
  