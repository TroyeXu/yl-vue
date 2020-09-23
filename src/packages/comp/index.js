import ComColorButton from './src/components/HelloWorld.vue'
// 存儲組件列表
const components = [ComColorButton]
/* 
  定義install 方法，接收Vue作為參數，如果使用use註冊插件，則所有的組件都將被註冊
*/
const install = function(Vue) {
  // 判斷是否安裝
  if (install.installed) {
    return
  }
  // 遍歷所有組件
  components.map((item) => {
    Vue.component(item.name, item)
  })
}
// 判斷是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ComColorButton,
}
