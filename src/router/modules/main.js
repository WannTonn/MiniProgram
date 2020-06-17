const Home = () => import(/* webpackChunkName: "mainPage" */ '@/components/Home.vue');

const Main = [{
  path: '/',
  redirect: '/index',
  name: 'index',
  component: Home,
  children: [
    {
      path: 'index',
      name: 'index',
      component: Home
    }
  ]
}];
export default Main