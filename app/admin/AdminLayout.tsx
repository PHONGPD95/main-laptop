'use client';

import '@/styles/index.scss';

import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { useWindowSize } from 'react-use';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import ScrollToTop from '@/components/ScrollToTop';
import { SidebarProvider } from '@/contexts/sidebarContext';
import { useTheme } from '@/contexts/themeContext';
import AppBar from '@/layout/AppBar';
import Sidebar from '@/layout/Sidebar';
import ThemeStyles from '@/styles/theme';

export default function AdminLayout({ children }: PropsWithChildren) {
  const { width } = useWindowSize();

  const { theme } = useTheme();
  const pathname = usePathname();

  const appRef = useRef<any>(null);

  const withSidebar = pathname !== '/login' && pathname !== '/404';

  useEffect(() => {
    appRef.current && appRef.current.scrollTo(0, 0);
  }, []);

  return (
    <SidebarProvider>
      <StyledComponentsThemeProvider theme={{ theme: theme }}>
        <ThemeStyles />
        <ToastContainer theme={theme} autoClose={2000} style={{ padding: '20px' }} />
        {width < 1280 && <AppBar />}
        <div className={`app ${!withSidebar ? 'fluid' : ''}`} ref={appRef}>
          <ScrollToTop />
          {withSidebar && <Sidebar />}
          <div className="app_content">
            {width >= 1280 && withSidebar && <AppBar />}
            <div className="main">{children}</div>
          </div>
        </div>
      </StyledComponentsThemeProvider>
    </SidebarProvider>
  );
}
