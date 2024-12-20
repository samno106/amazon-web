"use client";

import SigninModal from "@/components/modals/frontend/auth/siginin-modal";
import SignupModal from "@/components/modals/frontend/auth/signup-modal";
import { useEffect, useState } from "react";

export const FrontendModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SigninModal />
      <SignupModal />
    </>
  );
};
