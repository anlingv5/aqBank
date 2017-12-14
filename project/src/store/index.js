//vuex状态管理
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import aqData from '@/components/common/data'
import  dtNumber from '../../static/data/number.js'

let store = new Vuex.Store({
	state:{
		totalData:aqData.dataBank,
		tabUrlPath:'/mark?id=0&rshow=false',
		dtNumber: dtNumber
	},
	getters:{
		chooseData(state){
			let arr = state.totalData;
			let count = state.dtNumber;
            let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
		    while (i-- > min) {
		        index = Math.floor((i) * Math.random());
		        temp = shuffled[index];
		        shuffled[index] = shuffled[i];
		        shuffled[i] = temp;
		    }
		    return shuffled.slice(min);
		}   
	},
	mutations:{
		addStatus(state,data){
		   let index = data[0];
		   let newstatus = data[1];
		   let newCurrent = data[2];
           state.totalData[index].status= newstatus;
           state.totalData[index].current = newCurrent;
		},
		checkTabUrl(state,value){
			state.tabUrlPath = value;
		}
	}
})

export default store;