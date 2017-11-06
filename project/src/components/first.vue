<template>
<div class="firstCom">
	<div class="bg">
		<p>欢迎来到探测气象中心</p>
		<router-link :to="{ path:'/mark',query:{id:0,rshow:false}}">进入练习题库</router-link>
	</div>
</div>
</template>

<script>
import aqData from '@/components/common/data'

export default({
	data(){
		return{	
		}
	}
})
</script>



<style scoped lang="less">
.firstCom{
	width: 100%;
	height: 100%;
	background: #008dff;
	background-size: cover;
	p{
		margin: 0;
		padding-top:30%;
		color:#fff;
	}
	a{
		width:50vw;
		margin-top: 50%;
		color:#151516;
		display: inline-block;
        border-radius: 10px;
		line-height: 12.33vw;
		text-decoration: none;
		background: rgba(123, 203, 239, 0.65);

	}
}
</style>