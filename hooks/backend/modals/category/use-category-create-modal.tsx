import { create } from "zustand";

interface useCategoryCreateModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCategoryCreateModal = create<useCategoryCreateModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
