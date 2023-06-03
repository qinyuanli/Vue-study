//该文件是整个项目的入口文件

import { createApp } from 'vue'
import App from './App.vue'
//引入插件
import plugins from './plugins'

const app = createApp(App)

//应用（使用）插件
app.use(plugins)


app.mount('#app')
