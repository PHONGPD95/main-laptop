'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import type { PropsWithChildren } from 'react';

const ScrollToTop = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  useEffect(() => {
    const canControlScrollRestoration = 'scrollRestoration' in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default ScrollToTop;
