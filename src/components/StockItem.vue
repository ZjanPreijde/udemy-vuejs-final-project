<template lang="html">

  <div class="panel panel-success col-sm-6 col-md-4">
    <div class="panel-heading">
      <h2 class="panel-title">
        {{ stock.name }}
        <small> (Price: {{ formattedAmount(stock.price) }})</small>
      </h2>
      <span class="stock-id">{{ stock.id }}</span>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input type="number"
          class="form-control"
          v-model.number="buyQuantity"
          :class="{danger: invalidInput}"
        >
      </div>
      <div class="pull-right">
        <button
          class="btn btn-success"
          @click="handleBuy"
          :disabled="buyQuantity === 0 || invalidInput"
        >Buy</button>
      </div>
    </div>
    <p v-if="insufficientFunds" class="alert alert-warning">Insufficient Funds</p>
    <p v-else-if="invalidQuantity" class="alert alert-warning">Invalid Quantity</p>
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
    ...mapGetters(
      ['formattedFunds', 'formattedAmount', 'funds']
    ),
    insufficientFunds () {
      return this.buyQuantity * this.stock.price > this.funds
    },
    invalidQuantity () {
      return this.buyQuantity < 0 ||
        (this.buyQuantity > 0 && !Number.isInteger(this.buyQuantity))
    },
    invalidInput () {
      return this.insufficientFunds || this.invalidQuantity
    }
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
.danger { border: 1px solid red; }
</style>
