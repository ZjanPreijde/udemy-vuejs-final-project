<template>
  <div class="row stocks">
    <app-stock-item v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import StockItem from '@/components/StockItem'
export default {
  computed: {
    stocks () {
      return this.$store.state.stocks
    }
  },
  components: {
    appStockItem: StockItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
