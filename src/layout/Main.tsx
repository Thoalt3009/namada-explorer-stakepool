import * as React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
