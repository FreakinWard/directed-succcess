import { GoogleAnalytics } from '@next/third-parties/google';
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
      {/*<GoogleAnalytics gaId="G-K5VLE6725B" />*/}
      {/*<GoogleAnalytics gaId="G-MHLPM0VEBS" />*/}
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
    </>
  );
}
