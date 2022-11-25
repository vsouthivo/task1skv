<template>
  <v-app>
    <v-main>
      <NavBarVue />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBarVue from "@/components/NavBar.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    NavBarVue,
  },
};
</script>
