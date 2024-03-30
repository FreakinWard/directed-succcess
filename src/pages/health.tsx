import Link from 'next/link';
import pascalCase from 'pascalcase';

import packageJson from '../../package.json';

export function getStaticProps() {
  const healthData = {
    name: process.env.appName,
    version: process.env.appVersion,
    buildNumber: packageJson.buildNumber,
    buildJobUrl: packageJson.buildJobUrl,
    strapiApi: process.env.STRAPI_API,
    status: 'ok',
    timestamp: new Date().toISOString(),
  };

  return {
    props: {
      health: healthData,
    },
  };
}

export default function Health({ health }) {
  return (
    <div>
      <h2>Health Check</h2>
      {Object.keys(health)?.map((prop, index) => {
        if (prop === 'buildJobUrl')
          return (
            <div key={index}>
              <span>
                <strong>{`${prop}: `}</strong>
                <Link href={health[prop]}>{health[prop]}</Link>
              </span>
            </div>
          );

        return (
          <div key={prop}>
            <span>
              <strong>{`${pascalCase(prop)}: `}</strong>
              {`${health[prop]}`}
            </span>
          </div>
        );
      })}
    </div>
  );
}

Health.title = 'Health';
