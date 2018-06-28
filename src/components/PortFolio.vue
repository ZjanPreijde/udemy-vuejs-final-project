<template>
  <div class="row portfolio">
    <appPortfolioItem v-for="position in portfolio" :key="position.id" :position="position" />
  </div>
</template>

<script>
import PortfolioItem from '@/components/PortfolioItem'
export default {
  data () {
    return { /* any data? */ }
  },
  computed: {
    portfolio () {
      // console.log('portfolio', this.$store.state.portfolio)
      return this.$store.state.portfolio
    }
  },
  components: {
    appPortfolioItem: PortfolioItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
