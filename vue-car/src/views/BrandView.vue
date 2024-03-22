<script setup>
import CarList from '../../data/cars.json'
import { useRoute } from 'vue-router'

let dataCar = CarList.cars
const route = useRoute()
const brand = route.params.brand

console.log(brand)
console.log(dataCar[0].make)

for (let i = 0; i<dataCar.length; i++) {
    // console.log(dataCar[i].make)
    if (dataCar[i].make.toUpperCase() == brand.toUpperCase()) {
        // console.log(dataCar[i])
    }
}

</script>

<template>
    <div class="car" v-for="(brand, index) in dataCar" v-if="dataCar[i].make.toUpperCase() == brand.toUpperCase()" :key="index"></div>
</template>