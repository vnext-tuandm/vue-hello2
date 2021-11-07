<template>
  <v-app>
    <message-component :messages="this.$messages.label"/>
    <header-component />
    <div style="height: 100%">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import HeaderComponent from "../components/globals/header/Header.component.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
</style>
