// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// Vue.config.productionTip = false
// Vue.use(ElementUI)
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable */ 
let app = new Vue({
  el: '#app',
  data:{
          current: '',
          changeMode: true
  },
  methods: {
      press: function (event) {
          let me = this
          let key = event.target.textContent
          if (
              key != '=' &&
              key != 'C' &&
              key != '*' &&
              key != '/' &&
              key != '√' &&
              key != "x 2" &&
              key != "%" &&
              key != "<=" &&
              key != "±" &&
              key != "sin" &&
              key != "cos" &&
              key != "tan" &&
              key != "log" &&
              key != "ln" &&
              key != "x^" &&
              key != "x !" &&
              key != "π" &&
              key != "e" &&
              key != "rad" &&
              key != "°"
          ) {
              me.current += key
          } else if (key === '=') {
              if ((me.current).indexOf('^') > -1) {
                  let base = (me.current).slice(0, (me.current).indexOf('^'))
                  let exponent = (me.current).slice((me.current).indexOf('^') + 1)
                  me.current = eval('Math.pow(' + base + ',' + exponent + ')')
              } else {
                  me.current = eval(me.current)
              }
          } else if (key === 'C') {
              me.current = ''
          } else if (key === '*') {
              me.current += '*'
          } else if (key === '/') {
              me.current += '/'
          } else if (key === '+') {
              me.current += '+'
          } else if (key === '-') {
              me.current += '-'
          } else if (key === '±') {
              if ((me.current).charAt(0) === '-') {
                  me.current = (me.current).slice(1)
              } else {
                  me.current = '-' + me.current
              }
          } else if (key === '<=') {
              me.current = me.current.substring(0, me.current.length - 1)
          } else if (key === '%') {
              me.current = me.current / 100
          } else if (key === 'π') {
              me.current = me.current * Math.PI
          } else if (key === 'x 2') {
              me.current = eval(me.current * me.current)
          } else if (key === '√') {
              me.current = Math.sqrt(me.current)
          } else if (key === 'sin') {
              me.current = Math.sin(me.current)
          } else if (key === 'cos') {
              me.current = Math.cos(me.current)
          } else if (key === 'tan') {
              me.current = Math.tan(me.current)
          } else if (key === 'log') {
              me.current = Math.log10(me.current)
          } else if (key === 'ln') {
              me.current = Math.log(me.current)
          } else if (key === 'x^') {
              me.current += '^'
          } else if (key === 'x !') {
              let number = 1
              if (me.current === 0) {
                  me.current = '1'
              } else if (me.current < 0) {
                  me.current = NaN
              } else {
                  let number = 1
                  for (let i = me.current; i > 0; i--) {
                      number *= i
                  }
                  me.current = number
              }
          } else if (key === 'e') {
              me.current = Math.exp(me.current)
          } else if (key === 'rad') {
              me.current = me.current * (Math.PI / 180)
          } else if (key === '°') {
              me.current = me.current * (180 / Math.PI)
          }
      },
      changeModeEvent: function () {
          // 在 JavaScript 的函数中，this 关键字通常用于引用当前上下文的对象，也就是当前的 Vue 实例。
          // let是JavaScript中变量声明的关键字，用于声明块级元素范围内的变量
          // me是变量，存储了this的引用，可以在函数内部访问Vue的属性和方法。若不这样，则需要写出this.changeMode = !this.changeMode
          let me = this
          // 切换 changeMode 的布尔值，从而改变计算器的模式。例如，如果计算器当前处于基础计算模式（changeMode 为 true），
          // 那么执行这个方法后，它会切换到高级计算模式（changeMode 变为 false）
          me.changeMode = !me.changeMode
      }
  }
})