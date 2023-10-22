import AppContextProvider from '../context/GlobalContext';
import '../styles/globals.css';

import ClientLayout from '@/components/Layout.client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Babul Akter | Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <ClientLayout>{children}</ClientLayout>
        </AppContextProvider>
      </body>
    </html>
  );
}
