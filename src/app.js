import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './Button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)


new Vue({
    el:"#app",
    data() {
      return {
        loading1: false
      }
    }
})

import chai from 'chai'
const expect = chai.expect
// 单元测试
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  button.$mount('#test')
  let useElement = button.$el.querySelector('use')
  console.log(useElement)
  // 我期待元素下的属性值是
  expect(useElement.getAttribute('xlink:href')).to.eq('#isettings')
}