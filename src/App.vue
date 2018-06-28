<template>
  <div class="container">
    <h1>Stock Trader - Final Project</h1>
    <hr>
    <app-navbar @handleClick="handleClick"></app-navbar>
    <transition name="flip" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['handleDayEnd', 'handleSaveData', 'handleLoadData']),
    handleClick (event, param) {
      switch (event) {
        case 'endOfDay':
          this.handleDayEnd()
          break
        case 'saveData':
          this.handleSaveData(this.resource)
          break
        case 'loadData':
          this.handleLoadData(this.resource)
          break
      }
    }
  },
  created () {
    this.resource = this.$resource('stock-trader.json')
  },
  components: { appNavbar: Navbar }
}
</script>

<style>
.portfolio {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

}
h1, h2 { text-align: center; }
.flip-enter-active {
  animation:
    flip-in 0.5s ease-out forwards;
}
.flip-leave-active {
  animation:
    flip-in 0.5s ease-out forwards reverse;
}
@keyframes flip-in {
  from { transform: rotateY(90deg); opacity: 0; }
  to   { transform: rotateY( 0deg); }
}
</style>
