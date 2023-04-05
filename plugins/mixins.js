import Vue from "vue";

const mixin = {
  computed: {
    $largeView() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    $tabletView() {
      return this.$vuetify.breakpoint.smOnly;
    },
    $mobileView() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    $phoneView() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};

Vue.mixin(mixin);
