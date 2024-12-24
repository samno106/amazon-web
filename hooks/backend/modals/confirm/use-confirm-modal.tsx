import { string } from "zod";
import { create } from "zustand";

interface useConfirmModalStore {
  title: string;
  description: string;
  isOpen: boolean;
  loading: boolean;
  onOpen: (title: string, description: string) => void;
  onClose: () => void;
  onComfirm: () => void;
}

export const useConfirmModal = create<useConfirmModalStore>((set) => ({
  title: "",
  description: "",
  isOpen: false,
  loading: false,
  onOpen: (title: string, description: string) =>
    set({ isOpen: true, title: title, description: description }),
  onClose: () => set({ isOpen: false }),
  onComfirm: () => set({ loading: true }),
}));
