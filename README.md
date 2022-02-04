# CCSE Open Source Mirrors Website

This project builds the front-end website for [SUSTech CCSE Open Source Mirrors](https://mirrors.sustech.rocks/). It is built upon [Vuepress](https://vuepress.vuejs.org/).

## Setup

Make sure you have [Yarn](https://yarnpkg.com/) installed. (You may use NPM instead.)

``` sh
# Retrieve source code
git clone https://github.com/SUSTech-CRA/ccse-mirrors-web.git

# Install development dependencies
cd ccse-mirrors-web
yarn install
```

```text
# Modify api endpoint before running locally

# The head of "site/.vuepress/theme/util/tunasyncAdapter.js"
# const apiEndpoint

# The file of "site/.vuepress/theme/components/IsoModalPanel.vue"
# const isoinfoEndpoint
```

```sh
# Start your journey now
yarn dev
```

## Build for Production

``` sh
yarn build
```

By default, static files are generated in `site/.vuepress/dist/`. Publish the dist directory and you'll get your website.

## Acknowledgement

CCSE Open Source Mirrors is supported by [SUSTech Center for Computational Science and Engineering](http://hpc.sustech.edu.cn/).
