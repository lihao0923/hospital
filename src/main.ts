import { createApp } from 'vue'
import '@/assets/style/reset.scss'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import HosTop from '@/components/hos_top/index.vue'
import HosBottom from '@/components/hos_bottom/index.vue'


const app = createApp(App)
app.component('HosTop', HosTop)
app.component('HosBottom', HosBottom)

app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')

