const moment = require('moment')

module.exports = {
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'SDUST Open Source Mirrors',
      description: 'Open source mirror site supported by SDUST',
    }
  },
  head: [
  ],
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [{
          id: 'news',
          dirname: '_news',
          path: '/news/',
          itemPermalink: '/news/:year/:month/:slug.html',
          layout: 'IndexNews',
          itemLayout: 'Layout',
          pagination: {
            lengthPerPage: 9,
            layout: 'IndexNews'
          }
        }]
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format('YYYY-MM-DD HH:mm')
        }
      }
    ],
    '@vuepress/back-to-top',
    [
      'sitemap',
      {
        hostname: 'http://mirrors.sdust.edu.cn'
      },
    ]
  ],

  themeConfig: {
    locales: {
      '/': {
        nav: [{
            text: 'Home',
            link: '/'
          },
          {
            text: 'News',
            link: '/news/'
          },
          {
            text: 'Help',
            link: '/help/'
          },
          {
            text: 'About',
            link: '/about/'
          },
          {
            text: 'Github',
            link: 'https://github.com/sdustlug'
          }
        ],
        sidebar: {}
      }
    },
    docsRepo: 'sdustlug/ccse-mirrors-web',
    docsDir: 'site',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    search: false,
    lastUpdated: 'Last Updated',
    logo: '/mirrors-logo.svg',
    serviceWorker: {
      updatePopup: true
    }
  },

  markdown: {
    lineNumbers: false,
    toc: {
      includeLevel: [2, 3, 4]
    }
  }
}
