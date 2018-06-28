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
      <p>Position:
        {{ position.quantity }} stocks =
        {{ formattedAmount(position.quantity * stock.price) }}
      </p>
      <input type="text" v-model.number="sellQuantity">
      <button @click="handleSell">Sell</button>
      <p>Transactions total : {{ formattedAmount(tradeTotal) }}</p>
      <p>Transactions:</p>
      <p v-for="(transaction, index) in transactions" :key="index">
        {{ transaction.quantity }} at {{ formattedAmount(transaction.price) }}
      </p>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      sellQuantity: 0,
      stock: {},
      transactions: [],
      tradeTotal: 0
    }
  },
  props: ['position'],
  created () {
    this.stock = this.getStockFromId(this.position.id)
    this.transactionsCalc()
  },
  computed: {
    ...mapGetters(['formattedAmount', 'getStockFromId', 'getTransactionsFromId'])
  },
  methods: {
    ...mapActions(['handleTransaction']),
    transactionsCalc () {
      this.transactions = this.getTransactionsFromId(this.position.id)
      this.tradeTotal = this.transactions.reduce(
        (accumulator, curTrans) => accumulator + curTrans.quantity * curTrans.price
        , 0)
    },
    handleSell () {
      // qty > 0 and <= position.qty
      if (this.sellQuantity <= 0 || this.sellQuantity > this.position.quantity) {
        alert('Please enter a valid quantity')
      } else {
        this.handleTransaction(
          { id: this.position.id, quantity: -this.sellQuantity, price: this.stock.price }
        )
        this.sellQuantity = 0
        this.transactionsCalc()
      }
    }
  }
}
</script>

<style scoped lang="css">
h2 { display: inline; }
.stock-id, .price-ps { float: right; font-size: 10px;}
</style>
