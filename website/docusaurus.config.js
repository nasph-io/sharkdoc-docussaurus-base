
module.exports = {
  title: 'Sharkdoc',
  tagline: 'Create astonishing api & docs devportal',
  url: 'https://attobot.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  /* organizationName: 'attobot-discord', */
  projectName: 'website',
  favicon: 'img/favicon.ico',
  themeConfig: {
    hideableSidebar: true,
    announcementBar: {
      id: 'support_us',
      content: 'If you like AttoBot, please consider <a href="https://buymeacoff.ee/attobot">donating</a>!',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    navbar: {
      title: 'Nasph',
      logo: {
        alt: 'Nasph',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: '#',
          label: 'Lorem Ipsum',
          position: 'left',
        }, 
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{to: '/versions', label: 'lorem ipsum'}],
          dropdownActiveClassDisabled: true,
        },
        
        
        /* {
          href: 'https://discord.gg/fejq4seryy',
          label: 'Support Server',
          position: 'left',
        }, */
        {
          href: 'https://discord.com/api/oauth2/authorize?client_id=784351044065951744&scope=bot&permissions=171305158',
          label: 'Invite Nasph',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            /* {
              label: 'Support Server',
              href: 'https://discord.gg/fejq4seryy'
            }, */
            /* {
              label: 'Donate',
              href: 'https://buymeacoff.ee/attobot',
            }, */
            {
              label: 'GitHub',
              href: 'https://github.com/nasph-io/sharkdoc-site-templates'
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/skalena/mycompany/',
            },
            {
              label: 'blog',
              href: 'https://nasph.io/blog/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sharkdoc, Made by Skalena | Website built with Docusaurus`,
    },
  },
  scripts: [
    {
      src: 'https://arc.io/widget.min.js#V34Ysous',
      async: true,
    },
    {
      src: '//acacdn.com/script/suv4.js',
      'data-adel': 'lwsu',
      zid: '4196687'
    }
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
        {
          hashed: true,
        }
    ]
  ]
};
