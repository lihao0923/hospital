import { createApp } from 'vue'
import '@/assets/style/reset.scss'
import App from './App.vue'
import HosTop from '@/components/hos_top/index.vue'
import HosBottom from '@/components/hos_bottom/index.vue'

const app = createApp(App)
app.component('HosTop', HosTop)
app.component('HosBottom', HosBottom)

app.mount('#app')
