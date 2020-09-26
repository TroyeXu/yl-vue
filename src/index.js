// import Main from './components/footer.vue'
// import _Vue from 'vue'

// Main.install = (Vue) => {
//   if (!Vue) {
//     window.Vue = Vue = _Vue
//   }
//   Vue.component(Main.name, Main)
// }
// export default Main

// // Import vue component
// import component from './components/footer.vue'

// // install function executed by Vue.use()
// function install(Vue) {
//   if (install.installed) return
//   install.installed = true
//   Vue.component('VueLazyLoad', component)
// }

// // Create module definition for Vue.use()
// const plugin = {
//   install,
// }

// // To auto-install when vue is found
// let GlobalVue = null
// if (typeof window !== 'undefined') {
//   GlobalVue = window.Vue
// } else if (typeof global !== 'undefined') {
//   GlobalVue = global.Vue
// }
// if (GlobalVue) {
//   GlobalVue.use(plugin)
// }

// // Inject install function into component - allows component
// // to be registered via Vue.use() as well as Vue.component()
// component.install = install

// // Export component by default
// export default component

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
// import ComponentA from './src/components/ComponentA.vue'
// import ComponentB from './src/components/ComponentB.vue'
// let ModuleObj = { ComponentA, ComponentB }
// let MyModule = {}
// MyModule.install = (Vue) => {
//   for (let i in ModuleObj) {
//     Vue.component(i, ModuleObj[i])
//   }
// }
// export default MyModule

import VueTxtNumber from './components/vue-txt-number'

const install = (Vue, opts = {}) => {
  Vue.component(VueTxtNumber.name, VueTxtNumber)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { VueTxtNumber, install }

// 單筆
// import component from './component.vue';

// component.install = Vue => Vue.component(component.name, component);

// export default component

// 多筆
// import ComponentA from './src/components/ComponentA.vue'
// import ComponentB from './src/components/ComponentB.vue'
// const Components = { ComponentA, ComponentB }
// Object.keys(Components).forEach((name) => {
//   Vue.component(name, Components[name])
// })
// export default Components
