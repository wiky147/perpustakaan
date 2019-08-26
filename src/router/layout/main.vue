<template>
  <v-app>
    <Navbar />
    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar'

export default {
  components: { Navbar },
  data() {
    return {
      drawer: true
    };
  },
  methods: {
    changeDrawer(value) {
      this.drawer = value;
    }
  }
};
</script>
