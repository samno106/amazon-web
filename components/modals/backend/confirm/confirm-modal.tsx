"use client";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { useConfirmModal } from "@/hooks/backend/modals/confirm/use-confirm-modal";
import { LoaderCircle } from "lucide-react";

export const ConfirmModal = () => {
  const confirmModal = useConfirmModal();

  return (
    <Modal
      title={confirmModal.title}
      description={confirmModal.description}
      isOpen={confirmModal.isOpen}
      onClose={confirmModal.onClose}
      size="w-[500px]"
    >
      <div className="pt-3 space-x-2 flex items-center justify-end w-full">
        <Button
          size={"sm"}
          disabled={confirmModal.loading}
          variant="outline"
          onClick={confirmModal.onClose}
        >
          Cancel
        </Button>

        <Button
          size={"sm"}
          disabled={confirmModal.loading}
          variant="destructive"
          onClick={confirmModal.onComfirm}
        >
          {confirmModal.loading && (
            <LoaderCircle className=" animate-spin size-3" />
          )}
          Continue
        </Button>
      </div>
    </Modal>
  );
};
