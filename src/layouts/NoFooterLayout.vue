<template>
<v-app> 
    <header-component/>
        <slot/>
</v-app>
</template>

<script>
import HeaderComponent from '../components/globals/header/Header.component.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style>
</style>
