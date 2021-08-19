<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!--<img src="../../assets/img/tabbar/home.svg" alt="">-->
    <!--<div>首页</div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor:{
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed:{
      // 动态决定
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    /* 将多个flex均等分 */
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /* 去掉图片下面的空格像素 */
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active {
    color: red;
  }
</style>
