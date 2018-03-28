<template>
	<Content background-color="#000">
		<div class="dove">
			<img :src="imgHoldBird" style="margin-bottom: 5%">
			<div class="fly" ref='letBirdFly' style="margin-bottom: 5%">
				<img :src="imgHopeFree">
				<img class="flyDove" :src="imgDove" :class="{toFly: toFly}">
			</div>
			<img :src="imgCage">
		</div>
	</Content>
</template>

<script>
import {Content} from 'udn-newmedia-vue-components'

import imgHoldBird from '../assets/case_2/Mob/holdbird.jpg'
import imgHopeFree from '../assets/case_2/Mob/hopeFree.jpg'
import imgDove from '../assets/case_2/Mob/Dove.png'
import imgCage from '../assets/case_2/Mob/cage.jpg'
export default {

  name: 'dove',
  components: {
  	Content
  },
  data () {
    return {
    	imgHoldBird: imgHoldBird,
    	imgHopeFree: imgHopeFree,
    	imgDove: imgDove,
    	imgCage: imgCage,
    	toFly: false,
    }
  },
  methods: {
  	handle_scroll: function() {	
  		let cH = window.pageYOffset
  		const wH = window.innerHeight
  		const birdH = this.$el.offsetTop + this.$refs.letBirdFly.offsetTop - wH/2
  		if (cH > birdH && this.toFly === false) {
  			this.toFly = true
  		}
  	},
  },
  mounted() {
	window.addEventListener('scroll', this.handle_scroll)
  },
  destroyed: function() {
  	window.removeEventListener('scroll', this.handle_scroll)
  }
}
</script>

<style lang="scss" scoped>
.dove{
	position: relative;
	width: 100%;
	img{
		width: 100%;
		max-height: 100%;
	}
	.fly{
		position: relative;
		width: 100%;
		overflow: hidden;
		.flyDove{
			position: absolute;
			width: 80%;
			top: 30%;
			left: 0%;
			transition: 1353ms ease-in-out;
		}
		.toFly{
			top: 10%;
			left: -15%;
		}		
	}
}
</style>