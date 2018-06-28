<template>
  <div class="row" id="home">
    <div class="col-sm-12">
      <h1>Trade or View your Portfolio</h1>
      <p>You may Save & Load your Data</p>
      <p>Click on 'End Day' to begin a new Day!</p>
      <br><br>
      <h2>Your Funds: {{ formattedFunds }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['formattedFunds', 'formattedAmount'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px 30px;
  margin: 20px auto;
}
h1, h2 { text-align: left; font-weight: bold;}
</style>
