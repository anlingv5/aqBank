import Vue from 'vue'
import Router from 'vue-router'
import firstCom from '@/components/first'
import QuestionComponent from '@/components/question'
import answerCard from '@/components/answerCard'
Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'app',
	    component: firstCom,
    },
    {
      path:'/question',
      component: QuestionComponent
    },
    {
      path:'/answerCard',
      component: answerCard
    }
  ]
})
