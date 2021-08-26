import {ADD_COUNTER, ADD_TO_CART} from "./mutation-types";

export default {
  addCart(context, payload){
    return new Promise((resolve, reject) => {
      //payload新添加的商品
      let oldProduct = context.state.cartLit.find(item => item.iid === payload.iid)

      //2.判断oldProduct
      if(oldProduct){
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
        resolve('添加购物车成功 +1')
      }else {
        payload.count = 1
        // context.state.cartLit.push(payload)
        context.commit(ADD_TO_CART,payload)
        resolve('添加购物车成功')
      }
    })
  }
}
