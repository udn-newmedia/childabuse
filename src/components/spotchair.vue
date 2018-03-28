<template>
	<div class="spotchair" :style="{opacity: isOpacity, transform: 'translateY('+ isTrans +'px)'}">
		<img :src="srcRWD">
	</div>
</template>

<script>
import spotchair from '../assets/mobile/spotchair.jpg'
import spotchairPC from '../assets/web/spotchairpc.jpg'
export default {

  name: 'spotchair',

  data () {
    return {
    	spotchair: spotchair,
    	spotchairPC: spotchairPC,
      isOpacity: 1,
      isTrans: 0,
    }
  },
  computed: {
  	srcRWD: function() {
  		if(window.innerWidth < 1024){
  			return this.spotchair
  		} else {
  			return this.spotchairPC
  		}
  	}
  },
  methods: {
    handle_scroll: function() {
      let currentH = window.pageYOffset
      const vh = window.innerHeight 
      if(currentH > this.$el.offsetTop - vh*0.8){
        this.isOpacity = 1
        this.isTrans = 0
      } 
    },
  },
  mounted () {
    window.addEventListener('scroll', this.handle_scroll)
  },
  beforeDestroyed: function () {
    window.removeEventListener('scroll', this.handle_scroll)
  },  
}
</script>

<style lang="scss" scoped>
	.spotchair{
		position: relative;
		z-index: 1;
		width: 100%;
    // transition: opacity 666ms ease-in-out, transform 888ms ease-in-out;
		img{
			width: 100%;
			height: auto;
		}
	}
</style>