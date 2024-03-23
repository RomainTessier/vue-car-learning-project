<script >
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <img src="./assets/images/logo.png" alt="Vue Car" />
      </RouterLink>
      
    </nav>
  </header>

  <RouterView />
</template>

<style >
body, html{
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #333;
  color: white;
  height: 10vh;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a img{
  height: 10vh;
}


</style>
