import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  text: JSX.Element;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Sumber Energi Surya",
    Svg: require("@site/src/components/HomepageFeatures/img/gambarPanel.svg").default,
    text: ( <>Telah diketahui bahwa sumber energi dibagi menjadi dua, yaitu sumber energi konvensional dan terbarukan. Saat ini, ada kekhawatiran tentang menipisnya ketersediaan energi konvensional karena penggunaan yang tidak efisien. Oleh karena itu, perlu dilakukan upaya untuk meningkatkan pengembangan dan pemanfaatan sumber energi terbarukan.</> ),
    url: "/sumber-energi/",
  },
];

function Feature({title, Svg, text, url}: FeatureItem) {
  return (
    <><div className={clsx("col col--6", styles.featureImage)}>
          <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={clsx("col col--6", styles.featureContent)}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureText}>{text}</p>
        <div className="text--center padding-horiz--md">
          <Link className="button button--secondary button--lg" to={url}>
            <h4 className={styles.featuresTextButton}>Selengkapnya</h4>
          </Link>
        </div>
      </div></>
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
