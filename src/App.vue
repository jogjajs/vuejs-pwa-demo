<template>
  <div>

    <Navbar />

    <div class="container py-5">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {

  components: {
    Navbar
  },

};
</script>


<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  @import "~placeholder-loading/src/scss/placeholder-loading";
</style>
