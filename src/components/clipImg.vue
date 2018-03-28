<template>
	<div class="clipImg">
		<img :src="imgSrc">
	</div>
</template>

<script>
import clipimg from '../assets/mobile/clipimg.png'
import clipimgPC from '../assets/web/clipimg.png'
export default {

  name: 'clipImg',

  data () {
    return {
    	clipimg: clipimg,
    	clipimgPC: clipimgPC
    }
  },
  computed: {
  	imgSrc: function() {
  		if(window.innerWidth < 1024){
  			return this.clipimg
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