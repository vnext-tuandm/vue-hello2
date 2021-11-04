<template>
<v-app> 
    <header-component/>
        <slot/>
    <footer-component/>
</v-app>
</template>

<script>
import FooterComponent from '../components/globals/footer/Footer.component.vue'
import HeaderComponent from '../components/globals/header/Header.component.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
