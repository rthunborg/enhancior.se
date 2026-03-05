"use client";

import { useEffect } from "react";
import { useContactModal } from "@/components/contact";

export function AutoOpenContact() {
  const { openContactModal } = useContactModal();

  useEffect(() => {
    openContactModal();
  }, [openContactModal]);

  return null;
}
