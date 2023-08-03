import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Alat Peraga Energi Surya',
    Svg: require('@site/src/components/HomepageFeatures/img/panel.svg').default,
    url: '/alat-peraga/',
  },
  {
    title: 'Segera',
    Svg: require('@site/src/components/HomepageFeatures/img/segera.svg').default,
    url: '',
  },
];

function Feature({title, Svg, url}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link className="button button--secondary button--lg" to={url}>
          <h3 className={styles.featuresTextButton}>{title}</h3>
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
