import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue'
import Less from 'less/common.less'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})

const Page = function () {
  console.log(555)
}

Page()