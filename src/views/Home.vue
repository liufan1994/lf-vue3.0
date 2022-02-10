<template>
  <div class="home">
    <img v-if="isLogo" alt="Vue logo" src="../assets/logo.png">
    <div>{{name}}</div>
    <div>
      <div v-for="(itme,index) in myList" :key="index">
        {{itme.name}}：{{itme.con}}
      </div>
      <div v-for="(itme,index) in myList2" :key="index">
        {{itme}}
      </div>
    </div>
    <button @click="logoFun()">点击LOGO消失/显示</button>
  </div>
</template>

<script>
import {ref , reactive, watch } from 'vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    
  },
  setup(){
    let name=ref('这里是VUE3.0')
    let myList=reactive([
      {name:'列表1',con:'内容1内容1内容1内容1内容1'},
      {name:'列表2',con:'内容1内容1内容1内容1内容1'}
    ])
    let myList2=reactive([])
    myList.map(val=>{
      myList2.push(val.name)
    })
    let isLogo=ref(true)
    let logoFun = () => {
      isLogo.value=!isLogo.value
    }
    watch(isLogo,(newValue,oldValue)=>{
      console.log('isLogo: ', isLogo);
      console.log('newValue: ', newValue);
      console.log('oldValue: ', oldValue);
    })
    return {
      name,
      myList,
      myList2,
      isLogo,
      logoFun
    }
  }
}
</script>
