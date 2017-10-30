<template>
<div class="resultComponent">
	<mt-header title="答题详情" :fixed="true">
	  <router-link to="/" slot="left">
	    <mt-button icon="back">返回首页</mt-button>
	  </router-link>
	</mt-header>
	<div class="resultBox">
		<div class="listHeadr">
			<span><img src="../assets/ok.png"><label style="color:#03a9f4;">2</label></span>
			<span><img src="../assets/error.png"><label style="color:#ff5722;">1</label></span>
			<span><img src="../assets/total.png"><label>3</label><label>/20</label></span>
		</div>
		<div class="dataList">
			<span v-for="item in data" :class="'ative'+item.status">{{item.id}}</span>
		</div>
	</div>
</div>
</template>

<script>
const data =[{
	"id":"1",
	"status":1
},{
	"id":"2",
	"status":2
},{
	"id":"3",
	"status":3
},{
	"id":"4",
	"status":3
}]

export default{
	data(){
		return {
			data:data
		}
	},
	methods:{
	}
}
</script>

<style scoped lang="less">
.resultComponent{
	width: 100%;
	display: block;
	text-align: left;
	.resultBox{
		.listHeadr{
			height: 8vw;
			border-bottom: 1px solid #ccc;
			span{
				margin:0 8vw;
				label{
					margin-left:3vw;
				}
			}
		}
		.dataList{
			margin-top: 2.67vw;
			span{
				line-height: 10vw;
				width:10vw;
				display: inline-block;
				border-radius: 50%;
				
				text-align: center;
				margin: 4vw;
			}
			.ative1{
				border:1px solid #03a9f4;
				background: rgba(3,169,244,0.14);
			}
			.ative2{
				border:1px solid #ff5722;		
				background: rgba(255,87,34,0.22);
			}
			.ative3{
				border:1px solid #ccc;
				background: rgba(204,204,204,0.53);
			}
		}
	}
	
}
</style>