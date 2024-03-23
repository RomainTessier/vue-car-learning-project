<script setup>
import { onMounted } from 'vue';
import dataBrands from '../../data/brands.json'
import Brands from '../components/Brands.vue'

let brandList = dataBrands.brands

onMounted(() => {
  console.log(brandList)
});

</script>

<template>

  <div class="bg"></div>
  <main>
    <RouterLink v-for="(brandList,index) in brandList " :key="index" :to="{name: 'brand', params : {brand : brandList.brandName}}">
      <Brands :logo="brandList.logo" :brandname="brandList.brandName"/>
    </RouterLink>
  </main>
</template>

<style>
main{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  backdrop-filter: blur(10px);
  height: 90vh;
  
}

.bg{
  background: no-repeat center/cover url('../assets/bg.gif');
  /* filter: blur(15px); */
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
}
</style>
