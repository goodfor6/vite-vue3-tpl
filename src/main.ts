import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

import Plugins from '@/plugins'
import './mock'

import 'virtual:svg-icons-register'
import * as echarts from 'echarts'

const store = createPinia()
store.use(piniaPluginPersist)

const app = createApp(App)
app.config.globalProperties.$echarts =echarts;

app.use(Plugins)
app.use(router)
app.use(store)
app.mount('#app')
