"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { ContactModal } from "./contact-modal";

interface ContactModalContextValue {
  openContactModal: (opts?: { service?: string }) => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<
    string | undefined
  >();

  const openContactModal = useCallback(
    (opts?: { service?: string }) => {
      setPreselectedService(opts?.service);
      setOpen(true);
    },
    [],
  );

  const closeContactModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ContactModalContext.Provider
      value={{ openContactModal, closeContactModal }}
    >
      {children}
      <ContactModal
        open={open}
        onOpenChange={setOpen}
        preselectedService={preselectedService}
      />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}
