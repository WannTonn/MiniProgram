import Vue from 'vue';
import Router from 'vue-router';
import main from './modules/main.js';


Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [...main]
})