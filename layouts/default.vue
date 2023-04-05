<template>
  <v-app id="app">
    <Header />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/header";
export default {
  name: "DefaultLayout",
  components: { Header },
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/styles.sass";
</style>
