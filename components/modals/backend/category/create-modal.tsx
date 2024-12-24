
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useCategoryCreateModal } from "@/hooks/backend/modals/category/use-category-create-modal";
import axios from "axios";
import { Category } from "@prisma/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Name is required"),
  parentId:z.string()
});

export const CreateCategoryModal = () => {

  const router = useRouter();

  const { toast } = useToast();
  const categoryCreateModal = useCategoryCreateModal();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [categories, setCategories]  = useState<Category[]>([]);

  const getCategory = async ()=>{
      try {
        const response = await axios.get("/api/backend/category");

        if(response.status === 200){
          setCategories(response.data.categories);
        }
      } catch (error) {
        console.log(error)
      }
     
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
      parentId:""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/backend/category", values);
      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Category has created.",
        });
        getCategory();
        form.reset();
        router.refresh();
       categoryCreateModal.onClose();
      }
    } catch (error: any) {
      toast({
        title: "Opp! Something went wrong.",
        description: `${error.response.data.message}`,
      });
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  const onGenerateSlug = async () => {
    const name = form.getValues("name");

    const setSlug = name.replace(/[^A-Z0-9]+/gi, "-").toLowerCase();

    if (name) {
      const existingSlug = await axios.get(`/api/backend/category/${setSlug}`);

      if (existingSlug.data.category) {
        form.setError("slug", {
          message: "Slug already taken!",
        });
        setDisabled(true);
      } else {
        form.clearErrors("slug");
        setDisabled(false);
      }

      form.setValue("slug", setSlug);
    } else {
      form.setValue("slug", "");
      form.clearErrors("slug");
      setDisabled(false);
    }
  };

  const onClosed = () => {
    categoryCreateModal.onClose();
    form.reset();
  };

  useEffect(()=>{
    getCategory();
  },[]);

  return (
    <Modal
      title="Create Category"
      description=""
      isOpen={categoryCreateModal.isOpen}
      onClose={onClosed}
      size="w-[450px]"
      isDashboard={true}
    >
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grid w-full items-center gap-1 space-y-0">
                  <FormLabel className="text-[11px] text-[#787879]">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      id="name"
                      onKeyUp={async () => await onGenerateSlug()}
                      className="placeholder:text-[13px] border-[#ECECED] bg-[#FBFBFC] focus-visible:ring-[#ECECED] shadow-none h-[35px] placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem className="grid w-full items-center gap-1 space-y-0">
                  <FormLabel className="text-[11px] text-[#787879]">
                    Slug
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled
                      {...field}
                      id="slug"
                      className="placeholder:text-[13px] border-[#ECECED] bg-[#FBFBFC] focus-visible:ring-[#ECECED] shadow-none h-[35px] placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="parentId"
              render={({ field }) => (
                <FormItem className="grid w-full items-center gap-1 space-y-0">
                  <FormLabel className="text-[11px] text-[#787879]">
                    Parent
                  </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-xs">
                          <SelectValue placeholder="Select parent" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="text-xs">
                      <SelectItem className="text-xs" value="null">Select parent</SelectItem>
                      {
                          categories && categories.map((category,index)=>(
                            <SelectItem className="text-xs" value={category.id} key={index}>{category.name}</SelectItem>
                          ))
                        }
                        
                      </SelectContent>
                    </Select>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center space-x-4 pt-2 justify-end">
              <Button
                type="button"
                onClick={onClosed}
                size={"sm"}
                variant={"outline"}
                className="text-[10px]"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size={"sm"}
                className="text-[10px]"
                disabled={loading || disabled}
              >
                {loading && <LoaderCircle className=" animate-spin size-3" />}
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default CreateCategoryModal;
