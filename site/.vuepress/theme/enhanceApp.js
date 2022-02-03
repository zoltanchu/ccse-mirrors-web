import feather from 'vue-icon'

// import bootstrap
import BootstrapVue from 'bootstrap-vue'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  try {
    Vue.use(feather, 'v-icon')
    Vue.use(BootstrapVue)  //use bootstrap
  } catch (e) {
    console.error(e.message)
  }
}