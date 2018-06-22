<template>
  <div class="container">
    <h1>Stock Trader - Final Project</h1>
    <hr>
    <app-navbar></app-navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: { appNavbar: Navbar }
}
</script>

<style>
h1, h2 { text-align: center; }
</style>
