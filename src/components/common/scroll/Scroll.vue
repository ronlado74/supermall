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
    data() {
      return {
        scroll:{
          type:Object,
          default() {
            return {}
          }
        }
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
      if(this.probeType ===2 || this.probeType ===3){
        this.scroll.on('scroll', (postion) => {
          // console.log(postion);
          this.$emit('scroll', postion)
        })
      }

      //3. 监听滚动到底部
      if(this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods:{
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      scrollTo(x, y, time) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>

</style>
