// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = async function createConfigAsync() {
  return {

    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    favicon: 'img/favicon.ico',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'id',
      locales: ['id'],
    },
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'suryami62', // Usually your GitHub org/user name.
    projectName: 'oza', // Usually your repo name.
    title: 'OZA',
    tagline: 'Belajar dengan OZA yuk!',

    // Set the production url of your site here
    url: 'https://oza.suryami62.my.id',

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/oza-social-card.jpg',
      navbar: {
        title: 'OZA',
        logo: {
          alt: 'OZA Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Blog',
            to: '/blog', 
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tentang',
            items: [
              {
                html: '<a href="" target="_blank" rel="noreferrer noopener" aria-label="Logo OZA"> <img src="img/logo.svg" alt="Logo OZA" width="65" /> </a>',
              },
            ],
          },
          {
            title: 'Kontak',
            items: [
              {
                label: 'Email',
                href: 'mailto:suryami62@protonmail.com',
              },
            ],
          },
          {
            title: 'Di Dukung Oleh',
            items: [
              {
                html: '<a href="https://www.cloudflare.com" target="_blank" rel="noreferrer noopener" aria-label="Diluncurkan oleh Cloudflare"> <img src="img/cf_logo.svg" alt="Diluncurkan oleh Cloudflare" width="120" /> </a>',
              },
              {
                html: '<a href="https://docusaurus.io" target="_blank" rel="noreferrer noopener" aria-label="Dikembangkan dengan Docusaurus"> <img src="img/ds_logo.svg" alt="Dikembangkan dengan Docusaurus" width="65" /> </a>',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://s.id/suryami62">suryami62</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          blog: {
            showReadingTime: false,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    plugins : [
      [
        'content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        {
          id: 'panel-surya',
          path: 'panel-surya',
          routeBasePath: 'panel-surya',
          sidebarPath: require.resolve('./sidebarsPanel-surya.js'),
        },
      ],
      [
        'client-redirects',
        /** @type {import('@docusaurus/plugin-client-redirects').Options} */
        ({
          fromExtensions: ['html'],
          createRedirects(routePath) {
            if (routePath === '/panel-surya' || routePath === '/panel-surya/') {
              return [`${routePath}/intro`];
            }
            return [];
          },
        }),
      ],
    ],
  }
}