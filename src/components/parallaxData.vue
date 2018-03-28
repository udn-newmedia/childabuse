<template>
	<div class="staticBox">
		<div class="paraBox" :style="{opacity: isOpacity, zIndex: isZ}">
			<div class="imgBox" v-for="item in GridItems">
				<img :src="GridImg">
			</div>
		</div>
		<div class="staticPage" ref='page_1'>
			<p>民國101年全台灣有</p>
			<h3>65</h3>
			<p>個通報後的兒童、少年，遭受虐待死亡</p>
		</div>
		<div class="staticPage" ref='page_2'>
			<p>民國105年全台灣有</p>
			<h3>127</h3>
			<p>個通報後的兒童、少年，遭受虐待死亡</p>
		</div>		
	</div>
</template>

<script>
// import _throttle from 'lodash.throttle'
import _delay from 'lodash.delay'

import GridImg from '../assets/grid.jpg'
export default {

  name: 'parallaxData',
  data () {
    return {
    	GridImg: GridImg,
    	GridItems: [],
    	count: 0,
    	itemCount: 0,
    	isOpacity: 0,
    	isZ: -1,
    	forInterval: null,
    	forInterval_2: null,
    }
  },
  computed: {

  },
  methods: {
  	addItem: function(count) {
	  	for(let i = 0; i < count; i++){
	  		if(this.itemCount < 127) {
		  		this.itemCount++
		  		this.GridItems.push(i)
	  		}
	  	}  		
  	},
  	handle_scroll: function() {
  		let currentH = window.pageYOffset
  		const vh = window.innerHeight
  		const self = this
  		const page_1_offset = this.$refs.page_1.offsetTop
  		const page_2_offset = this.$refs.page_2.offsetTop
  		const page_end = this.$el.offsetTop + this.$el.scrollHeight
  		const interTime = 222
  		// console.log(currentH)
  		if(currentH < this.$el.offsetTop) {
  			this.itemCount = 0
  			this.GridItems = []
  		}
  		if(currentH > this.$el.offsetTop - vh/2 && currentH < page_2_offset){
  			if(this.itemCount === 0){
  				this.isOpacity = 1
  				this.isZ = 0
  			}
  			if(this.forInterval === null){
	  			this.forInterval = setInterval(function(){
		  			if(self.itemCount < 60){
		  				self.addItem(10)
		  			} else if(self.itemCount < 65){
		  				self.addItem(1)
		  			} else {
		  				clearInterval(self.forInterval)
		  				self.forInterval = null
		  			}
	  			}, interTime)
  			}
  		} else if (currentH > page_2_offset - vh*1.5 && currentH < (this.$el.offsetTop + this.$el.clientHeight * 0.55)) {
  			if(this.forInterval_2 === null) {
	  			this.forInterval_2 = setInterval(function(){
		  			if(self.itemCount < 70) {
		  				self.addItem(5)
		  			} else if (self.itemCount < 120) {
		  				self.addItem(10)
		  			} else if (self.itemCount < 127) {
		  				self.addItem(1)
		  			}	else {
			  			clearInterval(self.forInterval_2)
			  			self.forInterval_2 = null
			  		}
	  			}, interTime) 
  			} 			
  		} else if (currentH > (this.$el.offsetTop + this.$el.clientHeight - vh)) {
  			this.isOpacity = 0
  			const self = this
  			_delay(function() {
  				console.log('delay?')
  				self.isZ = -1
  			}, 600)
  		}
  	}
  },
  mounted() {
  	window.addEventListener('scroll', this.handle_scroll)
  }
}
</script>

<style lang="scss" scoped>
	.staticBox{
		width: 100%;
		background-color: #000;
		box-sizing: content-box;
		padding: 150% 0;
	}
	.paraBox{
		position: fixed;
		z-index: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		align-content: center;
		padding-left: 5px;
		opacity: 0;
		transition: opacity 484ms ease-out;
	}
	.imgBox{
		width: 10%;
		padding-top: 5px;
		animation: fadeIn 1000ms ease-out;
		animation-fill-mode: both;
		img{
			width: 100%;
			max-height: auto;
			padding-right: 5px;
		}
	}
	.staticPage{
		position: relative;
		z-index: auto;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #fff;
		box-sizing: content-box;
		padding: 100% 0;
		h3{
			font-size: 50px;
			color: red;
			margin: 30px 0;
			font-weight: bold;
		}
		p{
			font-size: 18px;
			margin: 0;
		}
	}
	@keyframes fadeIn {
		from{
			opacity: 0;
			transform: translate(0, 0);
		}
		to{
			opacity: 1;
			transform: translate(0, 0);
		}
	}
  @media screen and (min-width: 1024px) {
  	.staticBox{
  		padding: 50% 0;
  	}
  	.staticPage{
  		padding: 40% 0;
  	}
  	.paraBox{
  		width: 60%;
  		left: 20%;
  	}
	.imgBox{
		width: 6%;
	}
  }

</style>