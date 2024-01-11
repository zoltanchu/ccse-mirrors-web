const moment = require('moment')

module.exports = {
  base: '/',

  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'SDUST Open Source Mirrors',
      description: 'Open source mirror site supported by SDUST',
    },
    '/': {
      lang: 'zh-CN',
      title: '山东科技大学开源软件镜像站',
      description: '山东科技大学开源软件镜像站',
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
      '/en/': {
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
            text: 'Status',
            link: '/status/'
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
      },
      '/': {
        nav: [{
            text: '主页',
            link: '/'
          },
          {
            text: '公告',
            link: '/news/'
          },
          {
            text: '帮助',
            link: '/help/'
          },
          {
            text: '同步状态',
            link: '/status/'
          },
          {
            text: '关于',
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
