import Vue from 'vue'
import Router from 'vue-router'
import firstCom from '@/components/first'
import MainComponent from '@/components/main'
import MarkComponent from '@/components/mark'
import ResultComponent from '@/components/result'

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'app',
	    component: firstCom,
    },{
		  path:'/home',
	  	component:MainComponent,
      children:[{
        path:'/mark',
        component:MarkComponent
      },{
        path:'/result',
        component: ResultComponent
      }]
    }
  ]
})
