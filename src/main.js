import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//注册全局组件
import Header from '@/components/Header'
import loading from '@/components/Loading'
Vue.component(Header.name,Header);
Vue.use(ElementUI);
Vue.use(loading)




new Vue({
  //注册路由
  router,
  store,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
