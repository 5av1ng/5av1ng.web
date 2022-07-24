//import Vue from 'vue'
//import Router from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/MainPage';
import BLOG from '@/components/BLOG';
import WebInfo from '@/components/WebInfo';
import MainPageOnePic from '@/components/MainPageOnePic';

const routerHistory = createWebHistory();

//Vue.use(Router)

const router = createRouter({
    history: routerHistory,
    routes:[
        {
            path: '/',
            name: 'MainPage',
            component: MainPage,
        },
        {
            path: '/MainPageOnePic',
            name: 'MainPageOnePic',
            component: MainPageOnePic,
        },
        {
            path: '/BLOG',
            name: 'BLOG',
            component: BLOG,
        },
        {
            path: '/WebInfo',
            name: 'WebInfo',
            component: WebInfo,
        },
    ]
});

/*export default new Router({
    routes: [
        //默认路径下显示该路由
        {
          path: '/',
          name: 'MainPage',
          component: MainPage 
        },{
          path: '/MainPageOnePic',
          name: 'MainPageOnePic',
          component: MainPageOnePic
        }
      ],
      mode:'history',
})*/

export default router;
