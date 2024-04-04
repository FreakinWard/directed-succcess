import { ReactNode } from 'react';

import Footer from './Footer';

interface Props {
  children: ReactNode | Array<ReactNode>;
}

export default function Layout({ children }: Props) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
