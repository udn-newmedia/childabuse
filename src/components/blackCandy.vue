<template>
	<Content background-color="#000" style="z-index: 10;position: relative">
		<div class="blackCandy">
			<img :src="srcRWD(imgCandyPC, imgCandy)" style="margin-bottom: 3%;">
			<div class="door" ref='letOpenDoor' style="margin-bottom: 6%">
				<img :src="srcRWD(imgDoorPC, imgDoor)" class="openDoor" :style="{transform: 'translate('+ isOpen +'%, 0)'}">
				<img :src="srcRWD(imgDoorBg, imgDoorBg)">
			</div>
			<div class="thronRoom" ref='thronRoom' style="margin-bottom: 6%;">
				<img :src="srcRWD(thronRoomBG, thronRoomBG_pc)">
				<img class="thronChild leftThron" :class="{forceZero: forceZero}" :src="srcRWD(leftThron, leftThron_pc)" alt="">
				<img class="thronChild topThron" :class="{forceZero: forceZero}" :src="srcRWD(topThron, topThron_pc)" alt="">
				<img class="thronChild rightThron" :class="{forceZero: forceZero}" :src="srcRWD(rightThron, rightThron_pc)" alt="">
			</div>
			<div class="stayInThron" ref='letThronIn' style="margin-bottom: 12%;">
				<img :src="srcRWD(inThronBg, inThronBg_pc)" alt="">
				<img class="thronChild kid" :class="{forceZero: forceZero_1}" :src="srcRWD(inThronChild, inThronChild_pc)" alt="">
				<img class="thronChild root" :class="{forceZero: forceZero_1}" :src="srcRWD(inThronRoot, inThronRoot_pc)" alt="">
				<img class="thronChild branch" :class="{forceZero: forceZero_1}" :src="srcRWD(inThronBranch, inThronBranch_pc)" alt="">
			</div>
			<div class="longThron" ref="longThronBlock">
				<img :src="longThronBg">
				<img :src="longThronBranch" class="theLongBranch" style="top: -100%" :style="{transform: 'translate(0, ' + longBranch + '%)'}">
				<img :src="longThronFg" class="thronChild">
			</div>
		</div>		
	</Content>
</template>

<script>
import {Content} from 'udn-newmedia-vue-components'
// imgsrc
import imgCandy from '../assets/case_1/Mob/candy_mob.jpg'
import imgDoor from '../assets/case_1/Mob/door_mob.png'
import imgDoorBg from '../assets/case_1/Mob/doorBg_mob.jpg'
import thronRoomBG from '../assets/thronroom/Mob/3.jpg'
import leftThron from '../assets/thronroom/Mob/V3-left_down.png'
import topThron from '../assets/thronroom/Mob/V3-up.png'
import rightThron from '../assets/thronroom/Mob/V3-right.png'

import inThronBg from '../assets/inthron/Mob/4.jpg'
import inThronChild from '../assets/inthron/Mob/Child.png'
import inThronRoot from '../assets/inthron/Mob/V4.png'
import inThronBranch from '../assets/inthron/Mob/Trorns_Mob.png'

import longThronBg from '../assets/longthron/Mob/5.jpg'
import longThronFg from '../assets/longthron/Mob/V5-Front.png'
import longThronBranch from '../assets/longthron/Mob/V5.png'

import imgCandyPC from '../assets/case_1/Web/candy_pc.jpg'
import imgDoorPC from '../assets/case_1/Web/door_pc.png'
import imgDoorBgPC from '../assets/case_1/Web/doorBg_pc.jpg'
import thronRoomBG_pc from '../assets/thronroom/Web/3.jpg'
import leftThron_pc from '../assets/thronroom/Mob/V3-left_down.png'
import rightThron_pc from '../assets/thronroom/Web/V3-right.png'
import topThron_pc from '../assets/thronroom/Web/V3-up.png' 

import inThronBg_pc from '../assets/inthron/Web/4.jpg'
import inThronChild_pc from '../assets/inthron/Web/Child.png'
import inThronRoot_pc from '../assets/inthron/Web/V4.png'
import inThronBranch_pc from '../assets/inthron/Web/Trorns_Web.png'

export default {

  name: 'blackCandy',
  components: {
  	Content
  },
  data () {
    return {
    	isOpen: 0,    	
    	forceZero: false,
    	forceZero_1: false,
    	longBranch: 0,
    	imgCandy: imgCandy,
    	imgDoor: imgDoor,
    	imgDoorBg: imgDoorBg,
    	imgCandyPC: imgCandyPC,
    	imgDoorPC: imgDoorPC,
    	imgDoorBgPC: imgDoorBgPC,   	
    	thronRoomBG: thronRoomBG,
    	leftThron: leftThron,
    	topThron: topThron,
    	rightThron: rightThron,
		thronRoomBG_pc: thronRoomBG_pc, 
		leftThron_pc: leftThron_pc, 
		rightThron_pc: rightThron_pc, 
		topThron_pc: topThron_pc,
		inThronBg: inThronBg,
		inThronChild: inThronChild,
		inThronRoot: inThronRoot,
		inThronBranch: inThronBranch,
		inThronBg_pc: inThronBg_pc,
		inThronChild_pc: inThronChild_pc,
		inThronRoot_pc: inThronRoot_pc,
		inThronBranch_pc: inThronBranch_pc,
		longThronBg: longThronBg,
		longThronFg: longThronFg,
		longThronBranch: longThronBranch,		
    }
  },
  methods: {
  	handle_scroll: function() {	
  		let cH = window.pageYOffset
  		const wH = window.innerHeight
  		const doorH = this.$el.offsetTop + this.$refs.letOpenDoor.offsetTop - wH * 0.2
  		const thronH = this.$el.offsetTop + this.$refs.letThronIn.offsetTop - wH * 0.4
  		const roomH = this.$el.offsetTop + this.$refs.thronRoom.offsetTop - wH * 0.4
  		const longH = this.$el.offsetTop + this.$refs.longThronBlock.offsetTop - wH * 0.2
  		if (cH > doorH && cH < thronH) {
  			this.isOpen = 10
  		}
  		else if (cH >= thronH && cH < this.$el.offsetTop + this.$el.clientHeight) {
  			this.forceZero_1 = true
  		}
  		else {
  			this.isOpen = 0
  			this.isThronIn = 100
  			this.forceZero_1 = false
  		}
  		if(cH >= roomH && cH < roomH + wH*1.2){
  			this.forceZero = true
  		} else {
  			this.forceZero = false
  		}
  		if(cH >= longH && cH < longH + this.$refs.longThronBlock.clientHeight){
  			if(this.longBranch = (cH - longH)/ this.$refs.longThronBlock.clientHeight * 300 > 100) {
  				this.longBranch = 100
  			} else {
  				this.longBranch = (cH - longH)/ this.$refs.longThronBlock.clientHeight * 300
  			}
  		}
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
  mounted () {
  	window.addEventListener('scroll', this.handle_scroll)
  },
  beforeDestroy () {
  	window.removeEventListener('scroll', this.handle_scroll)
  }
}
</script>

<style lang="scss" scoped>
.blackCandy{
	position: relative;
	width: 100%;
	img{
		width: 100%;
		max-height: 100%;
	}
}
.door{
	position: relative;
	width: 100%;
	overflow: hidden;
	img{
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		max-height: 100%;
		z-index: 0;
	}
	.openDoor{
		width: 100%;
		max-height: 100%; 
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		transition: transform 1333ms ease-in;
		transform: translate(0, 0);
	}	
}
.stayInThron{
	position: relative;
	width: 100%;
	overflow: hidden;	
}
.longThron{
	position: relative;
	width: 100%;
	overflow: hidden;
}
.branch{
	transform: translate(50%, 0);
}
.kid{
	transform: translate(5%, 0);
}
.root{
	transform: translate(0, 10%);
}
.thronRoom{
	position: relative;
	width: 100%;
	overflow: hidden;
}
.thronChild{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	transition: transform 2222ms ease-out;
}
.theLongBranch{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}
.leftThron{
	transform: translate(-10%, 0);
}
.topThron{
	transform: translate(0, -10%);
}
.rightThron{
	transform: translate(10%, 10%);
}
.forceZero{
	transform: translate(0, 0) !important;
}
</style>