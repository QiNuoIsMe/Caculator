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
new Vue({
  el: '#app',
  data () {
    return {
      current: '',
      changeMode: true
    }
  },
  methods: {
    press (event) {
      let me = this
      let key = event.target.textContent

      if (
        key !== '=' &&
        key !== 'C' &&
        key !== '*' &&
        key !== '/' &&
        key !== '√' &&
        key !== 'x 2' &&
        key !== '%' &&
        key !== '<=' &&
        key !== '±' &&
        key !== 'sin' &&
        key !== 'cos' &&
        key !== 'tan' &&
        key !== 'log' &&
        key !== 'ln' &&
        key !== 'x^' &&
        key !== 'x !' &&
        key !== 'π' &&
        key !== 'e' &&
        key !== 'rad' &&
        key !== '°'
      ) {
        me.current += key
      } else if (key === '=') {
        try {
          if (me.current.includes('^')) {
            let base = me.current.slice(0, me.current.indexOf('^'))
            let exponent = me.current.slice(me.current.indexOf('^') + 1)
            me.current = Math.pow(Number(base), Number(exponent))
          } else {
            me.current = (function () {
              'use strict'
              return me.current
            })()
            // me.current = Function ('"use strict"; return (' + me.current + ')')()
          }
        } catch (error) {
          console.error('Error evaluating expression:', error)
          me.current = 'Error'
        }
      } else if (key === 'C') {
        me.current = ''
      } else if (['*', '/', '+', '-'].includes(key)) {
        me.current += key
      } else if (key === '±') {
        if (me.current.charAt(0) === '-') {
          me.current = me.current.slice(1)
        } else {
          me.current = '-' + me.current
        }
      } else if (key === '<=') {
        me.current = me.current.slice(0, -1)
      } else if (key === '%') {
        me.current = Number(me.current) / 100
      } else if (key === 'π') {
        me.current = Number(me.current) * Math.PI
      } else if (key === 'x 2') {
        me.current = Math.pow(Number(me.current), 2)
      } else if (key === '√') {
        me.current = Math.sqrt(Number(me.current))
      } else if (key === 'sin') {
        me.current = Math.sin(Number(me.current))
      } else if (key === 'cos') {
        me.current = Math.cos(Number(me.current))
      } else if (key === 'tan') {
        me.current = Math.tan(Number(me.current))
      } else if (key === 'log') {
        me.current = Math.log10(Number(me.current))
      } else if (key === 'ln') {
        me.current = Math.log(Number(me.current))
      } else if (key === 'x^') {
        me.current += '^'
      } else if (key === 'x !') {
        let number = 1
        let currentNum = Number(me.current)
        if (currentNum === 0) {
          me.current = '1'
        } else if (currentNum < 0) {
          me.current = NaN
        } else {
          for (let i = currentNum; i > 0; i--) {
            number *= i
          }
          me.current = number
        }
      } else if (key === 'e') {
        me.current = Math.exp(Number(me.current))
      } else if (key === 'rad') {
        me.current = Number(me.current) * (Math.PI / 180)
      } else if (key === '°') {
        me.current = Number(me.current) * (180 / Math.PI)
      }
    },
    changeModeEvent () {
      this.changeMode = !this.changeMode
    }
  }
})
