// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from "prism-react-renderer";

module.exports = async function createConfigAsync() {
  return {

    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",
    favicon: "img/favicon.ico",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "id",
      locales: ["id"],
    },

    markdown:{
      mermaid: true,
    },

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "suryami62", // Usually your GitHub org/user name.
    projectName: "oza", // Usually your repo name.
    title: "OZA",
    tagline: "Belajar dengan OZA yuk!",

    // Set the production url of your site here
    url: "https://oza.suryami62.my.id",

    themes: ["@docusaurus/theme-mermaid"],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      // Replace with your project's social card
      image: "img/oza-social-card.jpg",
      navbar: {
        title: "OZA",
        logo: {
          alt: "OZA Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Blog",
            to: "/blog", 
            position: "left"
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "OZA",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Profil",
                to: "/",
              },
              {
                label: "Kontak",
                href: "mailto:halo@suryami62.my.id",
              },
            ],
          },
          {
            title: "Dari",
            items: [
              {
                html: ` <a href="https://suryami62.my.id" aria-label="suryami62" target="_blank">
                          <img id="srmi62" src="/img/srmi62-bx.svg" alt="logo suryami62" height="75"/>
                        </a>
                        <img id="btg" src="/img/btg.svg" height="75"/>
                        <a href="https://ustjogja.ac.id" aria-label="Universitas Sarjanawiyata Tamansiswa" target="_blank" rel="noreferrer noopener">
                          <img id="ust" src="/img/ust_logo.png" alt="logo ust" height="75"/>
                        </a>`
              },
            ],
          },
        ],
        logo: {
          alt: "Logo OZA",
          src: "img/logoText.svg",
          href: "/"
        },
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://suryami62.my.id">suryami62</a>.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      mermaid: {
        theme: {},
      },
    }),

    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          blog: {
            showReadingTime: false,
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    plugins : [
      [
        "@docusaurus/plugin-google-gtag",
        {
          trackingID: "G-C682MNEKZK",
          anonymizeIP: false,
        },
      ],
      [
        "@gracefullight/docusaurus-plugin-cloudflare-analytics",
        { token: "4d0983a1026b49ff9700fe84e6b74851" },
      ],
      [
        "content-docs",
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        {
          id: "sumberEnergi",
          path: "sumber-energi/",
          routeBasePath: "sumber-energi",
          sidebarPath: require.resolve("./sidebarsAlat-peraga.js"),
        },
      ],
      [ 
        "ideal-image",
        {
          quality: 70,
          max: 1030, // max resized image's size.
          min: 640, // min resized image's size. if original is lower, use that size.
          steps: 2, // the max number of images generated between min and max (inclusive)
          disableInDev: false,
        },
      ],
    ],
  };
};