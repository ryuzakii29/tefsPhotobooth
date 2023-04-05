<template>
  <div class="mb-12 page-content-padded mt-12">
    <h1 class="text-primary mb-4">Our Package</h1>
    <v-carousel height="400" hide-delimiter-background show-arrows="hover">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <v-row
              class="mx-12"
              :style="$mobileView && 'flex-direction: column;'"
              no-gutters
            >
              <v-col cols="12" sm="4">
                <h2 class="text-primary">{{ slide }} Slide</h2>
              </v-col>
              <v-col cols="12" sm="4">
                <p class="pa-2 ma-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </v-col>
            </v-row>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Package",
  data() {
    return {
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>
