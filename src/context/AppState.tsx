import { DehydratedState } from '@tanstack/react-query';
import { NextRouter } from 'next/router';
import { Session } from 'next-auth';
import { ReactNode } from 'react';

import TelemetryProvider from '@/components/AppTelemetry/TelemetryProvider';

import QueryCache from './QueryCache';

interface Props {
  children: ReactNode;
  pageTitle: string;
  requireAuth: boolean;
  router: NextRouter;
  session: Session;
  dehydratedState?: DehydratedState;
}

/* istanbul ignore next */
if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { setupMsw } = require('../core/msw');
  void setupMsw();
}

export default function AppState({ children, pageTitle, router, dehydratedState }: Props) {
  return (
    <TelemetryProvider router={router} pageTitle={pageTitle}>
      <QueryCache dehydratedState={dehydratedState}>{children}</QueryCache>
    </TelemetryProvider>
  );
}
