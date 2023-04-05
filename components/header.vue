<template>
  <div>
    <v-card
      width="100%"
      class="card"
      :class="$mobileView ? 'mb-12' : 'mx-auto'"
      v-if="!$mobileView"
    >
      <v-app-bar class="header">
        <img
          alt="Tef's Logo"
          src="../static/icon.jpg"
          width="50"
          class="mr-12"
        />
        <v-row
          align="start"
          style="flex-wrap: nowrap"
          :style="$tabletView && 'justify-content: space-evenly'"
        >
          <router-link to="/" class="header-options mx-1">
            <div>Home</div>
          </router-link>
          <router-link to="/package" class="header-options mx-1">
            <div>Packages</div>
          </router-link>
          <router-link to="/about-us" class="header-options mx-1">
            <div>About Us</div>
          </router-link>
          <router-link to="/contact-us" class="header-options mx-1">
            <div>Contact Us</div>
          </router-link>
        </v-row>
      </v-app-bar>
    </v-card>
    <!-- Mobile -->
    <v-card v-else class="mobile-nav">
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          temporary
          style="min-height: 100%'"
        >
          <v-list-item style="place-content: center">
            <img alt="Tef's Logo" src="../static/icon.jpg" width="150"
          /></v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item>
              <router-link to="/" class="header-options"
                >Home
              </router-link></v-list-item
            >
            <v-list-item
              ><router-link to="package/" class="header-options"
                >Packages</router-link
              ></v-list-item
            >
            <v-list-item
              ><router-link to="/about-us" class="header-options"
                >About Us</router-link
              ></v-list-item
            >
            <v-list-item
              ><router-link to="/contact-us" class="header-options"
                >Contact Us</router-link
              ></v-list-item
            >
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px">
          <div class="d-flex h-100 mobile-navigation">
            <v-app-bar-nav-icon
              variant="text"
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </div>
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";

.header {
  background-color: white !important;
  box-shadow: 0px 3px 1px -2px rgb(255, 192, 203) !important;
}

.card {
  box-shadow: none !important;
}
.header-options {
  text-align: center;
  color: black;
  padding: 13px;
  text-decoration: none;

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    width: 100%;
  }
}
.header-options:hover,
.nuxt-link-exact-active {
  box-shadow: inset 100px 0 0 0 #00bfff;
  color: white;
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    box-shadow: inset 250px 0 0 0 #00bfff;
  }
}

.mobile-nav {
  width: 100%;
  height: 40px;

  .layout {
    position: fixed;
    height: 100% !important;
    z-index: 20;
  }
  .v-main {
    padding: 0px !important;
    height: fit-content !important;
    position: relative;
  }
  .mobile-navigation {
    position: fixed !important;
    right: 10px !important;
  }
}
</style>
