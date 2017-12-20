<template>
<div class="firstCom">
	<div class="bg">
		<p>欢迎来到气象观测练习题库</p>
		<div class="firstContent">
			<div class="selectBox">
				<span>请选择练习数量：</span>
				<input type="Number" name="" v-model="aqNumber">
			</div>
			<div class="partCard">
				<p>法律规章</p>
				<mt-button type="danger" size="small" @click="choosePart1">法律规章</mt-button>
			</div>
			<div class="partCard">
				<p>行业知识部分</p>
				<mt-button type="danger" size="small" @click="choosePart2">行业知识部分</mt-button>
			</div>
			<div class="partCard">
				<p>气象专业知识</p>
				<mt-button type="danger" size="small" @click="choosePart31">气象学</mt-button>
				<mt-button type="danger" size="small" @click="choosePart32">天气学</mt-button>
				<mt-button type="danger" size="small" @click="choosePart33">航空气象学</mt-button>
				<mt-button type="danger" size="small" @click="choosePart34">卫星与雷达</mt-button>
			</div>
			<div class="partCard">
				<p>观测业务规定</p>
				<mt-button type="danger" size="small" @click="choosePart4">观测业务规定</mt-button>
			</div>
		</div>
	</div>
</div>
</template>

<script>

export default({
	data(){
		return{	
			aqNumber:10,
			totalData:''
		}
	},
	mounted(){
		this.$nextTick(()=>{
			this.$store.commit('addAqData',"");
			this.$store.commit('addCurrentId', 0);
      	    this.$store.commit('addCurrentData','');
			this.getAqdata();
		})
	},
	methods:{
		getAqdata(){
			// this.$http.get('/static/data/newData.json').then((res)=>{
			// 	// console.log(res)
			// 	this.$set('totalData',res.data);
			// 	// this.totalData = res.data;
			// 	console.log(this.totalData);
			// },(req)=>{
			// 	alert("数据请求接口出错,请联系管理员");
			// });
			this.totalData = require('../../newData.json');
		},
		choosePart1(){
			this.$store.commit('addAqData',this.totalData[0].choose[0].questions);
			this.$router.push({ path:'/question' });
		},
		choosePart2(){
			this.$store.commit('addAqData',this.totalData[1].choose[0].questions);
			this.$router.push({ path:'/question' });
		},
		choosePart31(){
			this.$store.commit('addAqData',this.totalData[2].choose[0].questions);
			this.$router.push({ path:'/question' });
		},
		choosePart32(){
			this.$store.commit('addAqData',this.totalData[2].choose[1].questions);
			this.$router.push({ path:'/question' });
		},
		choosePart33(){
			this.$store.commit('addAqData',this.totalData[2].choose[2].questions);
			this.$router.push({ path:'/question' });
		},
		choosePart34(){
			this.$store.commit('addAqData',this.totalData[2].choose[3].questions);
			this.$router.push({ path:'/question' });
		},
		choosePart4(){
			this.$store.commit('addAqData',this.totalData[3].choose[0].questions);
			this.$router.push({ path:'/question' });
		}
	}
})
</script>



<style scoped lang="less">
.firstCom{
	width: 100%;
	height: 100%;
	background: url('../../static/img/bg.jpg');
	background-size:cover;
	background-position: top;
	p{
		margin: 0;
		padding-top:20px;
		color:#333;
	}
	button{
		margin: 3.25vw;
	}
}
.firstContent{
	margin-top: 30px;
	text-align: left;
	padding-left: 10px;
	span{
		line-height: 40px;
		color:#333;
	}
	input{
		height: 40px;
		width:50px;
		font-size: 20px;
	}
}
.partCard{
	width: 100%;
	display: inline-block;
	p{
		text-align: left;
		border-bottom:1px solid #ccc;
	}
	button{
		float: left;
	}
}
</style>