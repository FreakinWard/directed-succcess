import { ReactNode } from 'react';

import Page from '@/components/Main/components/Page';

interface Props {
  children: ReactNode | Array<ReactNode>;
}

export default function Layout({ children }: Props) {
  return <Page>{children}</Page>;
}
