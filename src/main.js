import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/js/all'
import ElementPlus from 'element-plus'
import installElementPlus from './plugins/element'
import 'nprogress/nprogress.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from './plugins/font-awesome'

const app = createApp(App).use(Quasar, quasarUserOptions)
installElementPlus(app)
const GStore = reactive({ flashMessage: '' })
app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .component('font-awesome-icon', FontAwesomeIcon)
  .provide('GStore', GStore)
  .mount('#app')
