<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from './shared/Navbar.vue'
export default {
  name: "Layout",
  components: {
      Navbar
  },
  data() {
    return {};
  }
};
</script>
