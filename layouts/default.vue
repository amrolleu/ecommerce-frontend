<template>
  <div>
    <Navbar />
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar,
  },
}
</script>
