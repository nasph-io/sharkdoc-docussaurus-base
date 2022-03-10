# SharkDoc API & Doc Portal

This repository is the base for any API Dev & Doc Portal generated and managed by SharkDoc in line with the Nasph Platform.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

SharkDoc will help you to generate the pages for this static site automatically.

Intial Componets and Utilities

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Initial Configuration 

For changing the initial things in this portal, you have to take a look in this file: ```docusaurus.config.js ```: 

Here you have some key configurations to do that will impact the site initially : 

```js
const config = {
  title: 'My Site', //this is the devportal title (showing on browser title on the top )
  tagline: 'Dinosaurs are cool', 
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', //change this for a new icon
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
```


### Starting customize visual assets

On the same file, we have another section that is reponsible for visual assets :

```js

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site', //Page title on the left on the top 
        logo: {
          alt: 'My Site Logo', 
          src: 'img/logo.svg',//this is located in ./static/src/img 
        },
  
  ...
```
![Customizing theme](https://github.com/nasph-io/sharkdoc-docussaurus-base/raw/main/static/img/assets/toptitle.jpg)

## Customizing the Navbars

Here are the main points : 

```js

themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
...
        items: [
          {
            type: 'doc', //this is the doc template
            docId: 'intro', //first item from the top menu
            position: 'left', // on the left
            label: 'Tutorial', // top menu
          },
          {to: '/blog', label: 'Blog', position: 'left'}, // on the left as well 
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right', //the link on the right on the top, could be you company website
          },
        ],
      },
...      

```

![Customizing theme](https://github.com/nasph-io/sharkdoc-docussaurus-base/raw/main/static/img/assets/top-site-left.jpg)

### Customizing the Footer 

Here are the properties that you have to tweak in order to adapt the information according your needs:

```js

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],

```

The css class : dark for footer (```footer-dark```), is located in the folder ```./src/css/custom.css```, in the following portion: 

```css
.footer--dark{
  
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(171,24,118,1) 49%, rgba(0,255,222,1) 100%);
display: block;

}
```

### Customizing Main Themes colors

We have to main themes: 

- Default : White
- Dark : Alternative Dark theme.

In order to customize it, there is a nice utility provided by Docussaurus here: https://docusaurus.io/docs/styling-layout . It helps you to define the new colors: 

![Customizing theme](https://github.com/nasph-io/sharkdoc-docussaurus-base/raw/main/static/img/assets/pallete.jpg)

