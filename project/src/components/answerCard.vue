<template>
<div class="resultComponent">
	<mt-header title="答题卡" :fixed="true">
	  <router-link to="/" slot="left">
	    <mt-button icon="back">返回首页</mt-button>
	  </router-link>
	</mt-header>
	<div class="resultBox">
		<div class="listHeadr">
			<span><img src="../assets/ok.png"><label style="color:#03a9f4;">{{right_count}}</label></span>
			<span><img src="../assets/error.png"><label style="color:#ff5722;">{{error_count}}</label></span>
			<span><img src="../assets/total.png"><label>{{(totalData.length)-right_count-error_count}}</label><label>/{{totalData.length}}</label></span>
		</div>
		<div class="dataList">
			<span v-for="(item,index) in totalData" :class="'ative'+item.status" @click="toQuestion(index)">{{index+1}}
			</span>
		</div>
	</div>
</div>
</template>

<script>
export default{
	data(){
		return {
			right_count:0,
			error_count:0
		}
	},
	computed:{
      totalData(){
         return this.$store.state.totalData;
      }
    },
    mounted(){
    	this.$nextTick(()=>{
    		this.getData();
    	})
    },
	methods:{
		getData(){
			for (var i = 0; i < this.totalData.length; i++) {
	   	   	  switch(this.totalData[i].status){
	   	   	  	 case 'ok':
	   	   	  	    this.right_count++;
	   	   	  	    break;
	   	   	  	 case 'error':
	   	   	  	 	this.error_count++;
	   	   	  	 	break;
	   	   	  }
	   	    }
		},
		toQuestion(index){
			this.$store.commit('addCurrentId',index);
			this.$router.push({ path:'/question'});
		}
       // end methods
	}
}
</script>

<style scoped lang="less">
.resultComponent{
	width: 100%;
	display: block;
	text-align: left;
	margin-top: 15vw;
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
				a{
					text-decoration: none;
				}
			}
			.ativeok{
				border:1px solid #03a9f4;
				background: rgba(3,169,244,0.14);
			}
			.ativeerror{
				border:1px solid #ff5722;		
				background: rgba(255,87,34,0.22);
			}
			.ative{
				border:1px solid #ccc;
				background: rgba(204,204,204,0.53);
			}
		}
	}
	
}
</style>