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
  <main>
    <RouterLink v-for="(brandList,index) in brandList " :key="index" :to="{name: 'brand', params : {brand : brandList.brandName}}">
      <Brands :logo="brandList.logo" :brandname="brandList.brandName"/>
    </RouterLink>
  </main>
</template>

<style>
main{
  display: flex;
  padding: 20vh;
  flex-wrap: wrap;
}
</style>
