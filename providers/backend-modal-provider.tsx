"use client";

import CreateCategoryModal from "@/components/modals/backend/category/create-modal";
import { useEffect, useState } from "react";

export const BackendModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateCategoryModal/>
    </>
  );
};