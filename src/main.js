import { createApp } from 'vue'
import App from './App.vue'
import ComColorButton from './packages/comp/src/components/HelloWorld.vue
import Vue from 'Vue'
// 註冊組件庫
Vue.use(ComColorButton)
createApp(App).mount('#app')
