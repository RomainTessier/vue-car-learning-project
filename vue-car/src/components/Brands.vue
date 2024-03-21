<script setup>


const props = defineProps([
    'logo',
    'brandname'
])

</script>

<template>
    <div class="brand">
        <img :src="props.logo" alt="brand logo" />
    </div>
</template>

<style>
.brand img{
    height: 100px;
   
}

.brand{
    cursor: pointer;
    margin: 2vw;
}
</style>