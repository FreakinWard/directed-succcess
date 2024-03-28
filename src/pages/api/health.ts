import { NextApiRequest, NextApiResponse } from 'next';

import packageJson from '../../../package.json';

export interface HealthTypes {
  version: string;
  status: string;
}

export default function health(req: NextApiRequest, res: NextApiResponse<HealthTypes>) {
  const healthData = {
    name: process.env.appName,
    version: process.env.appVersion,
    buildNumber: packageJson.buildNumber,
    buildJobUrl: packageJson.buildJobUrl,
    strapiApi: process.env.STRAPI_API,
    status: 'ok',
  };

  res.status(200).json(healthData);
}
