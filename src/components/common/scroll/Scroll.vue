<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        // scroll:{
        //   type:Object,
        //   default() {
        //     return {}
        //   }
        // }
        scroll: null
      }
    },
    //接收父组件来的值
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      //1. 创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        pullUpLoad: this.pullUpLoad, //上拉加载
        click: true,
        observeDOM: true,
        mouseWheel:true
      })

      //2.监听滚动位置
      this.scroll.on('scroll', (postion) => {
        // console.log(postion);
        this.$emit('scroll', postion)
      })
      // this.scroll.scrollTo(0,0)

      //3. 监听上拉加载
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods:{
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(0, 0, time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
