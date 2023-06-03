//该文件是整个项目的入口文件

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.productionTip = false

app.mount('#app')
