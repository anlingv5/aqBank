import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/main'
import StartComponent from '@/components/start'
import ResultComponent from '@/components/result'

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'app',
	    component: StartComponent,
    },{
		path:'/main',
	  	component:MainComponent
    },{
    	path:'result',
    	component:ResultComponent
    }
  ]
})
