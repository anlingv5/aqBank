//vuex状态管理
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


let store = new Vuex.Store({
	state:{
		totalData: '',
		dtNumber: 10,
		currentData:'',
		currentId:0,
	},
	mutations:{
		addAqData(state,data){
		   state.totalData = data;
		},
		addStatus(state,data){
		   let index = data[0];
		   let newstatus = data[1];
		   let newCurrent = data[2];
           state.totalData[index].status= newstatus;
		},
		addCurrentData(state,data){
			state.currentData = data;
		},
		addCurrentId(state,data){
			state.currentId = data;
		}
	}
})

export default store;