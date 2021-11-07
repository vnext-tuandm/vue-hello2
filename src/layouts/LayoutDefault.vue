<template>
<v-app> 
  <message-component :messages="this.$messages.label" :types="this.$messages.types"/>
  <header-component/>
  <div style="height: 100%">
      <router-view/>
  </div>
  <footer-component/>
</v-app>
</template>

<script>
import MessageComponent from '@/components/globals/messages/Message.component.vue'
import FooterComponent from '../components/globals/footer/Footer.component.vue'
import HeaderComponent from '../components/globals/header/Header.component.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    MessageComponent,
  }
}
</script>

<style lang="scss">
</style>
