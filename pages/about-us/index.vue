<template>
  <div class="page-content-padded mt-12">
    <v-col>
      <v-row no-gutters>
        <v-col cols="4">
          <v-sheet class="pa-2 ma-2">
            <h1 class="text-primary" v-if="$largeView">Our Mission</h1>
            <h2 class="text-primary" v-if="$tabletView">Our Mission</h2>
            <h3 class="text-primary" v-if="$mobileView">Our Mission</h3>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</v-sheet
          >
        </v-col>
      </v-row>
    </v-col>
    <!-- our people -->
    <v-divider></v-divider><br />
    <h1 class="text-primary">Meet Our People</h1>
    <v-col>
      <v-row no-gutters>
        <v-col cols="4" style="text-align: center">
          <v-sheet class="pa-2 ma-2">
            <img
              src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              height="100px"
            />
            <h3 class="text-primary">Person 1</h3>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
    <v-col>
      <v-row no-gutters>
        <v-col cols="4" style="text-align: center">
          <v-sheet class="pa-2 ma-2">
            <img
              src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              height="100px"
            />
            <h3 class="text-primary">Person 2</h3>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
