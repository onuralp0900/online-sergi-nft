<template>
  <Navbar/>
  <AnaSayfaEklenti />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from '../components/home/HomeNavbar'
import AnaSayfaEklenti from '../components/Eklenti/AnaSayfaEklenti.vue'
export default {

  components:{Navbar,AnaSayfaEklenti}
  
}
</script>

<style>

</style>