<template>
	<div class="diversion">
		<a :href="href" target="_blank">
			<img :src="img" alt="">	
		</a>
		<a :href="href" target="_blank">
			<h2>{{text}}</h2>
		</a>
	</div>
</template>

<script>

export default {

  name: 'diversion',
  props: ['href', 'text', 'img'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.diversion{
	position: relative;
	z-index: 0;
	background-color: #e5e5e5;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;
	margin-top: 50px;
	width: 100%;
	img{
		width: 100%;
		max-height: 100%;
	}
	h2{
		margin-left: 15px;
	}
	a{
		text-decoration: none;
		color: #000;
	}
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
	.diversion{
		p{
			font-size: 20px;
		}
	}
}
@media screen and (min-width: 1024px) {
	.diversion{
		padding: 30px;
		justify-content: flex-start;
		align-items: center;
		img{
			display: block;
		}
		h2{
			margin-left: 30px;
		}
	}
}
</style>