<template>
  <div class="cart">
    <!--  导航  -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!--商品列表-->
    <cart-list/>

    <!--底部汇总-->
    <cart-botton-bar/>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  import CartList from "./childComps/CartList";
  import CartBottonBar from "./childComps/CartBottomBar";

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      CartList,
      NavBar,
      CartBottonBar
    },
    computed: {
      //两种用法...mapGetters
      ...mapGetters(['cartLength'])
      // cartLength(){
      //   return this.$store.getters.cartLength
      // }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
