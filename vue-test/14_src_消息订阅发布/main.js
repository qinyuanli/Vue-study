//该文件是整个项目的入口文件

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.config.productionTip = false

const Demo = app.component({})
// const d = new Demo()

app.config.globalProperties.x = { a: 1, b: 2 }

console.log(app.config.globalProperties)

app.mount('#app')

