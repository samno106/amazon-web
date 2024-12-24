"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PenLineIcon, Trash } from "lucide-react";
import { CategoryColumn } from "./columns";
import { useConfirmModal } from "@/hooks/backend/modals/confirm/use-confirm-modal";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

interface CellActionProps {
  data: CategoryColumn;
}

export const CellAction = ({ data }: CellActionProps) => {
  const confirmModal = useConfirmModal();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onDeleteItem = async () => {
    try {
      const response = await axios({
        method: "DELETE",
        url: "/api/backend/category",
        data: { id: data.id },
      });

      if (response.status === 200) {
        router.refresh();
        confirmModal.onClose();
        toast({
          title: "Successful",
          description: "The category has deleted.",
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="text-xs">Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-xs">
          <span>
            <PenLineIcon className="size-3.5" />
          </span>
          <span>Edit</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-xs hover:cursor-pointer"
          onClick={() => {
            confirmModal.onComfirm = onDeleteItem;
            confirmModal.onOpen(
              "Are you sure to delete?",
              "This action cannot be undone"
            );
          }}
        >
          <span>
            <Trash className="w-3" />
          </span>
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
