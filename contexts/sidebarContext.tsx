'use client';

import { usePathname } from 'next/navigation';
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from 'react';

import useScrollLock from '@/hooks/useScrollLock';

type SidebarContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const setIsLocked = useScrollLock();

  // close sidebar when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }

    return () => {
      setIsLocked(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return <SidebarContext.Provider value={{ open, setOpen }}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => useContext(SidebarContext) as SidebarContextType;
