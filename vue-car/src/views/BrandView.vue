<script setup>
import CarList from '../../data/cars.json'
import { useRoute } from 'vue-router'

let dataCar = CarList.cars
const route = useRoute()
const brand = route.params.brand


</script>

<template>
    <template v-for="car in dataCar">
        <li class="car" v-if="car.make == brand">
            {{ car.model }}
        </li>
    </template>
</template>