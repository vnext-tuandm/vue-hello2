<template>
    <v-app-bar
      color="white"
      dense
      flat
      height="70px"
      :elevation=1
    >
      <img src="@/assets/images/brand.png"/>
      <v-toolbar-items class="hidden-sm-and-down align-center ml-2">
          <a v-for="item in menu" :key="item.icon" :to="item.link" flat class="pa-2 nav-item">{{
            item.title
          }}</a>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      
        <v-icon class="hidden-md-and-up mdi mdi-menu"></v-icon>
        <!-- <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list> -->
  </v-app-bar>
</template>
<script>
export default {
    name: "Header",
    data() {
      return {
        menu: [
          { icon: "home", title: "M&A案件を探す" },
          { icon: "info", title: "投資先を探す" },
          { icon: "warning", title: "イベントを探す" },
          { icon: "warning1", title: "Growtheaterについて" }
        ]
    };
  },
}
</script>
<style lang="scss">
@import "./Header.style.scss";
</style>