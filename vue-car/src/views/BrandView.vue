<script setup>
import CarList from '../../data/cars.json'
import { useRoute } from 'vue-router'

let dataCar = CarList.cars
const route = useRoute()
const brand = route.params.brand


</script>

<template>
    <div class="carlist">
    <template v-for="car in dataCar">
        <li class="car" v-if="car.make == brand">
            <img :src=car.image alt="car picture">
            <h2>{{car.model}}</h2>
        </li>
    </template>
    </div>
</template>

<style>
.carlist{
    display: flex;
    flex-wrap: wrap;
    background-color: #212121;
    height: 90vh;
    padding: 10vh;
    
}

.car{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: white;
    margin: 1vh;
    padding: 1vh;
    border-radius: 10px;
    height: 30vh;
    width: 30vh;
}

.car img{
    width: 90%;
    height: 70%;
    border-radius: 10px;
    object-fit: cover;
}
</style>