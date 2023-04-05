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
  head() {
    return {
      title: "Tef's Photobooth and Party Cart",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Tef's Photobooth and Party Cart`,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `Tef's Photobooth and Party Cart`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `Tef's Photobooth and Party Cart`,
        },
        { property: "og:type", content: "website" },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `Tef's Photobooth and Party Cart`,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: `Tef's Photobooth and Party Cart`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/styles.sass";
</style>
