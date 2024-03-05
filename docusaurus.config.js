// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MANUALES DE INSTALACIÓN',
  tagline: 'Guía paso a paso para instalación eficiente de software',
  favicon: 'img/6.png',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/prueba2',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Anderson18MD', // Usually your GitHub org/user name.
  projectName: 'prueba2', // Usually your repo name.
  deploymentBranch: 'gh-pages' ,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Info Persas',
        logo: {
          alt: 'My Site Logo',
          src: 'img/6.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manuales',
          },
          
          {
            href: 'https://github.com/Anderson18MD/prueba2',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Manuales',
            items: [
              {
                label: 'Introduccion',
                to: '/docs/intro',
              },
              {
                label: 'Script de Instalación',
                to: '/docs/tutorial-basics/create-a-page',
              },
              {
                label: 'Instalación del Facturador',
                to: '/docs/tutorial-basics/create-a-blog-post',
              },
              {
                label: 'Docker + GitLab + SSL',
                to: '/docs/tutorial-basics/create-a-document',
              },
              {
                label: 'Linux | Valet',
                to: '/docs/tutorial-basics/deploy-your-site',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} InfoPersas.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
