//action.js存放vuex的核心处理函数
// 1.tab切换
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 定义数据
const state ={
	selected:'练习'
}


// 定义方法
const mutations ={
	// 切换tab
	checkTab: (state) =>{
		state.selected = "答题卡";
	},
}

const store = new Vuex.Store({
	state,mutations
})
