<template>
  <main class="iso-modal-panel">
    <h3>
      <v-icon name="download"/>&nbsp;
      {{ (text ? text.title : null) || "Downloads" }}
    </h3>
    <div class="description">提供各大主流 Linux 发行版的安装镜像 / ISO 文件和应用工具安装包。</div>
    <div class="panel-content">
      <div class="download-wrapper">
        <b-button v-b-modal.isomodal variant="outline-primary">获取下载链接</b-button>
        <b-modal id="isomodal" title="获取安装镜像" static hide-footer scrollable size="xl">
          <div>
            <b-tabs content-class="mt-3">
              <b-tab title="操作系统">
                <b-tabs pills card vertical>
                  <b-tab v-for="item in osList" :key="item.distro"
                         :title='item.distro'>
                    <h4>{{ item.distro }}</h4>
                    <ul>
                      <li v-for="arry in item.urls" :key="arry.url"><a :href="arry.url">{{ arry.name }}</a></li>
                    </ul>
                  </b-tab>
                </b-tabs>
              </b-tab>
              <b-tab title="应用软件">
                <b-tabs pills card vertical>
                  <b-tab v-for="item in appList" :key="item.distro"
                         :title='item.distro'>
                    <h4>{{ item.distro }}</h4>
                    <ul>
                      <li v-for="arry in item.urls" :key="arry.url"><a :href="arry.url">{{ arry.name }}</a></li>
                    </ul>
                  </b-tab>
                </b-tabs>
              </b-tab>
            </b-tabs>
          </div>
        </b-modal>
      </div>
    </div>
  </main>
</template>


<script>
import {get} from "axios";

export const isoinfoEndpoint = "/isoinfo.json"
// export const isoinfoEndpoint = "//mirrors.sustech.edu.cn/isoinfo.json"

export default {
  props: {
    text: Object,
    basePath: String,
    pages: Array
  },
  created() {
    this.loadisoinfo()
  },
  data() {
    return {
      isoinfo: [],
    }
  },
  computed: {
    osList() {
      return this.isoinfo.filter(x => x.category === 'os').sort(function (a, b) {
        return ('' + a.distro).localeCompare(b.distro)
      });
    },
    appList() {
      return this.isoinfo.filter(x => x.category === 'app').sort(function (a, b) {
        return ('' + a.distro).localeCompare(b.distro)
      });
    },
  },
  methods: {
    loadisoinfo() {
      get(isoinfoEndpoint)
          .then((resp) => {
            this.isoinfo = resp.data
          })
          .catch((err) => console.error(err))
    },
  },

}
</script>


<style lang="stylus" scoped>

.iso-modal-panel
  padding 0

  h3
    padding-bottom 1rem
    margin 0
    border-bottom 2px solid $accentColor

    .icon
      margin-bottom -6px
      height 28px

  div.description
    padding 0.5rem 0rem 0rem 1rem

  .panel-content
    padding 0.5rem 0rem 0rem 1rem

    .meta
      font-style italic
      color lighten($textColor, 20%)
      @media (prefers-color-scheme: dark)
        color lighten($textDarkColor, 20%)

  .icon
    height 20px
    margin-bottom -4px

</style>

<style lang="scss" scoped>
.download-wrapper ::v-deep {
  @import "~bootstrap/scss/bootstrap";
}
</style>

<style lang="css" src="bootstrap-vue/dist/bootstrap-vue.min.css"></style>
