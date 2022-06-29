// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SharkDoc',
  tagline: 'Create astonishing api & docs devportal',
  url: 'https://nasph.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nasph-io/edgars', // Usually your GitHub org/user name.
  projectName: 'sharkdoc-docussaurus-base', // Usually your repo name.
  presets: [
    [
      'redocusaurus',
      {
        specs: [
          {
            specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
            id: 'swagger_petstore',
            routePath: '/sample/doc',
            addRoute: true
          },                  
        ],
        theme: {
          /**
           * Highlight color for docs
           */
          primaryColor: '#a32492',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '12px',
          /**
           * Options to pass to redoc
           * @see https://github.com/redocly/redoc#redoc-options-object
           */
          redocOptions: { hideDownloadButton: false, disableSearch: false },
        },
      },
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
         // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      docsSideNavCollapsible: true,
      editUrl: '',
      navbar: {
        title: 'SharkDoc',
        logo: {
          alt: 'Logo Nasph',
          src: 'img/logo-light.png',
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/nasph-io/sharkdoc-site-templates',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/company/skalena/',
              },{
                label: 'Twitter',
                to: 'https://twitter.com/skalena_hq',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nasph-io/sharkdoc-site-templates',
              },
              {
                label: 'Nasph.io',
                href: 'http://nasph.io/',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SharkDoc, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
