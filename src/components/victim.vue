<template>
	<div class="victim" ref='victim'>
		<div class="vicPhoto" :style="{opacity: isOpacity, zIndex: isShow}">
			<img :src="item" v-for="item in itemList">
		</div>
		<div class="dataDemo"></div>
		<div class="dataDemo" ref="data_1">
			<p>2012年全台灣有</p>
			<h3 class="specialNum">65</h3>
			<p>個受虐兒少死亡</p>
		</div>
		<div class="dataDemo" ref="data_2">
			<p>2016年全台灣有</p>
			<h3 class="specialNum">127</h3>
			<p>個受虐兒少死亡</p>
		</div>
		<div class="dataDemo">
			<p style="color: #fff">希望每個人身邊</p>
			<p style="color: #fff">都不要再有下一個受虐的兒少</p>
		</div>	
		<div class="dataDemo" ref="endOffset"></div>				
	</div>
</template>

<script>
import Diversion from '../components/diversion.vue'

import trueStory_01 from '../assets/child/1.jpg'
import trueStory_02 from '../assets/child/2.jpg'
import trueStory_03 from '../assets/child/3.jpg'
import trueStory_04 from '../assets/child/4.jpg'
import trueStory_05 from '../assets/child/5.jpg'
import trueStory_06 from '../assets/child/6.jpg'
import trueStory_07 from '../assets/child/7.jpg'
import fakeStory_01 from '../assets/child/a-1.jpg'
import fakeStory_02 from '../assets/child/a-2.jpg'
import fakeStory_03 from '../assets/child/a-3.jpg'
import fakeStory_04 from '../assets/child/a-4.jpg'
import fakeStory_05 from '../assets/child/a-5.jpg'
import fakeStory_06 from '../assets/child/a-6.jpg'
import fakeStory_07 from '../assets/child/a-7.jpg'
import fakeStory_08 from '../assets/child/a-8.jpg'
import fakeStory_09 from '../assets/child/a-9.jpg'
import fakeStory_10 from '../assets/child/a-10.jpg'
import fakeStory_11 from '../assets/child/a-11.jpg'
import fakeStory_12 from '../assets/child/a-12.jpg'
import fakeStory_13 from '../assets/child/a-13.jpg'
import fakeStory_14 from '../assets/child/a-14.jpg'
import fakeStory_15 from '../assets/child/a-15.jpg'
import fakeStory_16 from '../assets/child/a-16.jpg'
import fakeStory_17 from '../assets/child/a-17.jpg'
import fakeStory_18 from '../assets/child/a-18.jpg'
import fakeStory_19 from '../assets/child/a-19.jpg'
import fakeStory_20 from '../assets/child/a-20.jpg'

import _delay from 'lodash.delay'
import {Content} from 'udn-newmedia-vue-components'

export default {

  name: 'victim',
  components: {
  	Diversion,
  },
  data () {
    return {
    	itemList: [],
    	fakeStory: [
			fakeStory_01,
			fakeStory_02,
			fakeStory_03,
			fakeStory_04,
			fakeStory_05,
			fakeStory_06,
			fakeStory_07,
			fakeStory_08,
			fakeStory_09,
			fakeStory_10,
			fakeStory_11,
			fakeStory_12,
			fakeStory_13,
			fakeStory_14,
			fakeStory_15,
			fakeStory_16,
			fakeStory_17,
			fakeStory_18,
			fakeStory_19,
			fakeStory_20
    	],
    	trueStory: [
			trueStory_01,
			trueStory_02,
			trueStory_03,
			trueStory_04,
			trueStory_05,
			trueStory_06,
			trueStory_07    	
    	],
    	isShow: -10,
    	isOpacity: 0,
    	itemCount: 0,
    	forSetInterval: null,
    }
  },
  computed: {
  	row: function() {
  		if(window.innerWidth < 800) {
  			return 10
  		} else {
  			return 20
  		}
  	},
  	toRound: function() {
  		if(window.innerWidth < 800) {
  			return 5
  		} else {
  			return 15
  		}
  	}
  },
  methods: {
  	randomPhoto: function(i) {
  		let index = Math.random()
  		let good = Math.round(index * i)
  		return good
  	},
  	addItem: function (length) {
  		for(let i = 0; i < length; i++){
  			let vic = {}
  			switch(this.itemCount){
  				case 13:
  					vic = this.trueStory[0]
  				break;
  				case 30:
  					vic = this.trueStory[1]
  				break;
  				case 45:
  					vic = this.trueStory[2]
  				break;
  				case 68:
  					vic = this.trueStory[3]
  				break;
  				case 73:
  					vic = this.trueStory[4]
  				break;
  				case 107:
  					vic = this.trueStory[5]
  				break;
  				case 123: 
  					vic = this.trueStory[6]
  				break;
				default:
					vic = this.fakeStory[this.randomPhoto(19)]
				break;  				  				  				  				  				  				
  			}
  			this.itemList.push(vic)
  			this.itemCount++
  		}
  	},
  	handle_scroll: function() {
  		let cH = window.pageYOffset
  		const self = this
  		const wH = window.innerHeight
  		const showFixH = this.$refs.victim.offsetTop
  		const growImgH = this.$refs.data_2.offsetTop
  		if(cH < this.$refs.victim.offsetTop) {
  			this.isShow = -10
  			this.isOpacity = 0
  			this.itemCount = 0
  			this.itemList = []
  		}
  		if (cH >= (showFixH - wH*0.3) && cH <= showFixH + this.$refs.endOffset.offsetTop) {
  			this.isOpacity = 1
  			this.isShow = 0
  			console.log('like')
	  		if(cH >= showFixH - wH/3 && this.itemCount === 0 && this.itemCount < 65) {
	  			console.log('dude')
	  			if(this.forSetInterval === null) {
		  			this.forSetInterval = setInterval(() => {
		  				if(self.itemCount < 60){
		  					self.addItem(self.row)	
		  				} else if (self.itemCount >= 60 && self.itemCount < 65) {
		  					self.addItem(1)
		  				} else if (self.itemCount === 65) {
		  					clearInterval(self.forSetInterval)
		  					self.forSetInterval = null
		  				}
		  			}, 333)
	  			}
	  		}
	  		if(cH >= showFixH + growImgH - wH * .8 && this.itemCount === 65){
	  			if(this.forSetInterval === null){
	  				this.forSetInterval = setInterval(() => {
	  					if(self.itemCount < 70) {
	  						self.addItem(self.toRound)
	  					} else if (self.itemCount < 120 && self.itemCount >= 70) {
	  						self.addItem(self.row)
	  					} else if (self.itemCount < 127 && self.itemCount >= 120) {
	  						self.addItem(1)
	  					} else if (self.itemCount === 127) {
	  						clearInterval(self.forSetInterval)
	  						self.forSetInterval = null
	  					}
	  				}, 333)
	  			}
	  		}  			
  		}
  		if(cH > (this.$refs.victim.offsetTop +  this.$refs.endOffset.offsetTop + wH) && this.itemList.length > 0) {
  			console.log('ggod')
  			console.log(cH)
  			console.log(this.$refs.endOffset.offsetTop)
  			this.itemList = []
  			this.opacity = 0
  			this.itemCount = 0
  		}
  	}
  },
  mounted () {
	window.addEventListener('scroll', this.handle_scroll)
  },
  beforeDestroy () {
  	window.removeEventListener('scroll', this.handle_scroll)
  }
}
</script>

<style lang="scss" scoped>
.specialNum{
	font-family: 'Lora', serif;
}
.victim{
	position: relative;
	width: 100%;
	background-color: #000;
	padding: 70px 15px;
	overflow: hidden;
}
.vicPhoto{
	position: fixed;
	top: 0;
	left: 0;
	z-index: 0;
	width: 100%;
	height: 100vh;
	padding: 70px 15px;
	background-color: black;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	align-items: flex-start;
	transition: 333ms ease-in;
	opacity: 1;
	img{
		padding: 1%;
		width: 10%; 
		animation-name: fadeInUp;
		animation-duration: 444ms;
		animation-fill-mode: both;
		animation-timing-function: ease-in-out;
	}
}
.dataDemo{
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	h3{
		color: red;
		margin: 10px 0;
		font-size: 72px;
	}
	p{
		color: #fff;
		margin-bottom: 0;
	}
}
@keyframes fadeIn {
	from{
		opacity: 0;
	}
	to{
		opacity: 1;
	}
}
@keyframes fadeInUp{
	from{
		opacity: 0;
		transform: translate(0, 10px);
	}
	to{
		opacity: 1;
		transform: translate(0, 0)
	}
}
@media screen and (min-width: 768px) {
	.dataDemo{
		h3{
			font-size: 36px;
		}
		p{
			font-size: 20px;
		}
	}
}
@media screen and (min-width: 800px) and (max-width: 1023px) {
	.vicPhoto{
		width: 90%;
		left: 5%;
		img{
			width: 5.8%;
			padding: 2px;
		}
	}
}
@media screen and (min-width: 1024px) {
	.vicPhoto{
		width: 80%;
		left: 10%;
		padding-top: 90px;
		img{
			width: 5.5%;
			padding: 5px;
		}
	}
	.dataDemo{
		h3{
			font-size: 72px;
		}
		p{
			font-size: 21px;
			margin: 0;
		}
	}
}
</style>