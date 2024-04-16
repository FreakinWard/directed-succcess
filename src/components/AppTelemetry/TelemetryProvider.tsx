import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextRouter } from 'next/router';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  pageTitle: string;
  router: NextRouter;
}

export default function TelemetryProvider({ children }: Props) {
  return (
    <>
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  );
}
