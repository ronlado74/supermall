<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll"
                    class="check-button"
                    @click.native="checkClick"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计:{{totalPrice}}
    </div>

    <div class="calculate" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottonBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '￥' + this.$store.getters.cartList.filter(item => {
          return item.checked
        }).reduce((pre,item) => {
          return pre + item.price * item.count
        },0).toFixed(2)
      },
      checkLength(){
        return this.$store.getters.cartList.filter(item => item.checked).length
      },
      isSelectAll(){
        // return !(this.cartList.filter(item => !item.checked).length)
        if (this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkClick(){
        if(this.isSelectAll){ //全部选中
          this.cartList.forEach(item => item.checked = false)
        }else { //部分或者全部不选中
          this.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick(){
        if(!this.isSelectAll){
          this.$toast.show("请选择购买的商品",2000)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    position: fixed;
    display: flex;
    height: 40px;
    background-color: #eee;
    line-height: 40px;
    width: 100%;
  }

  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }

  .check-button{
    width: 22px;
    height: 22px;
    line-height: 22px;
    margin-right: 5px;
  }

  .price {
    margin-left: 30px;
    flex: 1;
  }

  .calculate{
    width: 90px;
    background-color: red;
    color: #fff;
    text-align: center;
  }
</style>
