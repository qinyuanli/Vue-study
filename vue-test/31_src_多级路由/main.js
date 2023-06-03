//该文件是整个项目的入口文件

import { createApp } from 'vue'
import App from './App.vue'

//引入VueRouter
import VueRouter from 'vue-router'
import Router from './router'

const app = createApp(App)
app.use(VueRouter)
app.use(Router)

//关闭Vue的生产提示
app.config.productionTip = false

app.mount('#app')
