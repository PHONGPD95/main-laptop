import '@/styles/index.scss';

import { PropsWithChildren } from 'react';

import AdminLayout from './AdminLayout';
import { ThemeProvider } from '@/contexts/themeContext';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <AdminLayout>{children}</AdminLayout>
    </ThemeProvider>
  );
}
