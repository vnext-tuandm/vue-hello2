<template>
<v-app> 
  <!-- <app-layout> -->
    <Header/>
        <router-view />
    <Footer/>
  <!-- </app-layout> -->
</v-app>
</template>

<script>
import Header from './components/globals/header/Header.component.vue'
import Footer from './components/globals/footer/Footer.component.vue'
// import AppLayout from './layouts/AppLayout.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // AppLayout
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
