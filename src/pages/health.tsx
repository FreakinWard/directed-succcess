import Link from 'next/link';
import pascalCase from 'pascalcase';

export function getStaticProps() {
  const healthData = {
    name: process.env.appName,
    version: process.env.appVersion,
    buildNumber: process.env.ciBuildNumber,
    buildJobUrl: process.env.ciBuildJobUrl,
    strapiApi: process.env.STRAPI_API,
    appInsights: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING || 'not-set',
    status: 'ok',
    timestamp: new Date().toISOString(),
  };

  return {
    props: {
      health: healthData,
      fallback: true,
    },
    // revalidate: 60,
  };
}

const LabelItem = ({ children, label }) => (
  <div>
    <span>
      <strong>{`${pascalCase(label)}: `}</strong>
      {children}
    </span>
  </div>
);

const LabelLinkItem = ({ href, children, label }) => (
  <div>
    <span>
      <strong>{`${pascalCase(label)}: `}</strong>
      <Link href={href}>{children}</Link>
    </span>
  </div>
);

const LabelTimeItem = ({ children, label }) => (
  <div>
    <span>
      <strong>{`${pascalCase(label)}: `}</strong>
      {new Date(children).toLocaleString()}
    </span>
  </div>
);

export default function Health({ health }) {
  return (
    <div>
      <h2>Health Check</h2>
      {Object.keys(health)?.map((prop, index) => {
        if (prop === 'buildJobUrl')
          return (
            <LabelLinkItem key={index} href={health[prop]} label={prop}>
              {health[prop]}
            </LabelLinkItem>
          );

        if (prop === 'timestamp')
          return (
            <LabelTimeItem key={index} label={prop}>
              {health[prop]}
            </LabelTimeItem>
          );

        return (
          <LabelItem key={prop} label={prop}>
            {health[prop]}
          </LabelItem>
        );
      })}
    </div>
  );
}

Health.title = 'Health';
