<template>
	<div class="flashchair" ><!-- :style="{backgroundImage: 'url('+ srcRWD(cover, cover_mob) +')'}" -->
		<h1 style="display: none;">角落哭泣的孩子</h1>
		<div class="flashBg">
			<img :src="srcRWD(cover, cover_mob)">
		</div>
		<div class="flash" @animationend="flasher" v-show="runAnime">
			<img :src="srcRWD(flashSrc[this.curFlash], flashSrcMob[this.curFlash])" alt="兒虐告白 爸媽是我的噩夢">
		</div>
	</div>
</template>

<script>
import cover from '../assets/flashchair/Web/Home-min.png'
import flash_1 from '../assets/flashchair/Web/IC_1-min.png'
import flash_2 from '../assets/flashchair/Web/IC_2-min.png'
import flash_3 from '../assets/flashchair/Web/IC_3-min.png'
import flash_4 from '../assets/flashchair/Web/IC_4-min.png'
import flash_5 from '../assets/flashchair/Web/IC_5-min.png'
import flash_6 from '../assets/flashchair/Web/IC_6-min.png'

import cover_mob from '../assets/flashchair/Mob/Home_mob.png'
import flash_1mob from '../assets/flashchair/Mob/IC_1_mob.png'
import flash_2mob from '../assets/flashchair/Mob/IC_2_mob.png'
import flash_3mob from '../assets/flashchair/Mob/IC_3_mob.png'
import flash_4mob from '../assets/flashchair/Mob/IC_4_mob.png'
import flash_5mob from '../assets/flashchair/Mob/IC_5_mob.png'
import flash_6mob from '../assets/flashchair/Mob/IC_6_mob.png'

export default {

  name: 'flashchair',

  data () {
    return {
    	cover: cover,
    	cover_mob: cover_mob,
    	flashSrc: [
    		flash_1,
    		flash_2,
    		flash_3,
    		flash_4,
    		flash_5,
    		flash_6
    	],
    	flashSrcMob: [
    		flash_1mob,
    		flash_2mob,
    		flash_3mob,
    		flash_4mob,
    		flash_5mob,
    		flash_6mob,
    	],
    	curFlash: 0,
    	runAnime: true,
    }
  },
  methods: {
   	flasher: function() {
  		const self = this
  		this.runAnime = false
  		if(this.curFlash >= this.flashSrc.length - 1 ){
  			this.curFlash = 0
  		}
  		else {
  			this.curFlash ++
  		}
  		setTimeout(() => {
  			self.runAnime = true
  		}, 777)
  	},
	srcRWD: function(pc, mob) {
	    if(window.innerWidth <= 768){
	        if(window.matchMedia("(orientation: landscape)").matches){
	            return pc
	        }
	        else{
	            return mob
	        }
	    }
	    else{
	        return pc
	    }		
	}		
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
	.flashchair{
		position: relative;
		width: 100%;
		height: 100vh;
		background-repeat: no-repeat;
		background-size: cover;
		background-color: #000;
	}
	.flash{
		position: absolute;
		z-index: 1;
		top: 15%;
		left: 0;
		width: 90%;
		animation-name: flash;
		// animation-iteration-count: infinite;
		animation-duration: 1666ms;
		animation-timing-function: ease-in-out;
		animation-fill-mode: both;
		img{
			opacity: .55;
			width: 100%;
			max-height: 100%;
		}
	}
	.flashBg{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 5;
		width: 100%;
		height: 100%;
		overflow: hidden;
		img{
			width: 100%;
			max-height: 100%;
		}
	}
	.runAnime{
		animation-duration: 4321ms;
	}
	@media screen and (max-width: 768px) {
		.flash{
			width: 100%;
			top: 0;
		}
	}
	@keyframes flash{
		0%{
			opacity: 0,
		}
		2%{
			opacity: 1
		}
		4%{
			opacity: 0
		}
		6%{
			opacity: 1,
		}
		8%{
			opacity: 0,
		}
		10%{
			opacity: 1,
		}
		12%{
			opacity: 0,
		}
		14%{
			opacity: 1,
		}
		// 16%{
		// 	opacity: 0,
		// }
		// 18%{
		// 	opacity: 1,
		// }
		// 20%{
		// 	opacity: 0,
		// }
		// 22%{
		// 	opacity: 1
		// }
		24%{
			opacity: 0
		}
		40%{
			opacity: 1,
		}
		100%{
			opacity: 0,
		}
	}
</style>