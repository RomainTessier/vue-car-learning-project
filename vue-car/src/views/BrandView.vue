<script setup>
import Cars from '../components/Car.vue'

let dataCar = Cars.Cars
let brand = this.$route.params.brand

</script>

<template>
    <div class="car" v-for="(brand, index) in dataCar" :key="index"></div>
</template>