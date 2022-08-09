<template>

  <AppNavbar/>

  <router-view/>

  <AppFooter/>
</template>

<script>
// @ is an alias to /src
import AppNavbar from './AppNavbar.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'HomeView',
  components: {
    AppNavbar,
    AppFooter,
  }
}
</script>
