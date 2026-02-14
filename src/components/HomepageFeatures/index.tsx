import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Microsoft 365',
    Svg: require('@site/static/img/m365.svg').default,
    description: (
      <>
        Hier findest du alle wichtigen Informationen rund um Microsoft 365 bei der Pfadi Züri.
      </>
    ),
  },
  {
    title: 'MiData',
    Svg: require('@site/static/img/pbs.svg').default,
    description: (
      <>
        Hier findest du alle wichtigen Informationen rund um MiData.
        Die Dokumentation der MiData findest du hier <a href="https://docu.scout.ch/" target="_blank">docu.scout.ch/</a>.
      </>
    ),
  },
  {
    title: 'E-Mail-Verkehr',
    Svg: '/img/outlook.png',
    description: (
      <>
        Hier zeigen wir dir, wie du deine E-Mails weiterleiten kannst, eine Signatur erstellst und einiges mehr.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
