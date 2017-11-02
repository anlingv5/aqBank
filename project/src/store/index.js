//vuex状态管理
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import aqData from '@/components/common/data'

let store = new Vuex.Store({
	state:{
		totalData:aqData.dataBank,
		tabUrlPath:''
	},
	getters:{

	},
	mutations:{
		addStatus(state,index,status){
           state.totalData[index].status= status;
		},
		addCurrent(state,index,data){
			state.totalData[index].current = data;
		}
	}
})

export default store;