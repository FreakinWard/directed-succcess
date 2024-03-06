import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode | Array<ReactNode>;
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
