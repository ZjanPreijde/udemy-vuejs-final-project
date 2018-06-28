<template lang="html">
  <div class="panel panel-default col-sm-6 col-md-4">
    <div class="panel-heading">
      <h2 class="panel-title">
        {{ stock.name }}
      </h2>
      (Price: {{ formattedAmount(stock.price) }})
      <span class="stock-id">{{ stock.id }}</span>
    </div>
    <div class="panel-body">
      <input type="text" name="" v-model.number="buyQuantity">
      <button @click="handleBuy">Buy</button>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      buyQuantity: 0
    }
  },
  computed: {
    ...mapGetters(['formattedFunds', 'formattedAmount'])
  },
  props: ['stock'],
  methods: {
    ...mapActions(['handleTransaction']),
    handleBuy () {
      // qty > 0 && qty * price <= funds
      if (this.buyQuantity <= 0) {
        alert('Please enter valid quantity')
      } else if (this.buyQuantity * this.stock.price > this.$store.state.funds) {
        alert('This amount (' +
          this.formattedAmount(this.buyQuantity * this.stock.price) +
          ') exceeds your funds')
      } else {
        this.handleTransaction(
          { quantity: this.buyQuantity, id: this.stock.id, price: this.stock.price }
        )
        this.buyQuantity = 0
      }
    }
  }
}
</script>

<style scoped lang="css">
h2 {display: inline;}
.stock-id { float: right; font-size: 10px;}
</style>
