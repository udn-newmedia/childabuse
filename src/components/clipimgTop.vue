<template>
	<div class="clipImg">
		<img :src="imgSrc">
	</div>
</template>

<script>
import clipimgPC from '../assets/web/w-10.png'
export default {

  name: 'clipImg',

  data () {
    return {
    	clipimgPC: clipimgPC
    }
  },
  computed: {
  	imgSrc: function() {
  		if(window.innerWidth < 1024){
  			return this.clipimgPC
  		} else {
  			return this.clipimgPC
  		}
  	}
  }
}
</script>

<style lang="scss" scoped>
	.clipImg{
		width: 100%;
		img{
			width: 100%;
			height: auto;
		}
	}
</style>