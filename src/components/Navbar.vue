<template lang="html">
<nav class="nav navbar-default">
  <div class="container-fluid">

    <ul class="nav navbar-nav">
      <router-link
          to="/" exact
          tag="li"
          class="navbar-brand"
          active-class="active">
        <a>Stock Trader</a>
      </router-link>
    </ul>

    <ul class="nav navbar-nav">
      <router-link
          to="/portfolio" tag="li"
          active-class="active">
        <a>Portfolio</a>
      </router-link>
      <router-link
          to="/stocks" tag="li"
          active-class="active">
        <a>Stocks</a>
      </router-link>
    </ul>

    <ul class="nav navbar-nav navbar-right">
      <li
          @click="endDay"
      >
        <a>End Day</a>
      </li>

      <li class="dropdown">
        <a  href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
        >
          Save & Load <span class="caret"></span>
        </a>

      <ul class="dropdown-menu">
        <li @click="saveData">
          <a href="#"
              class="dropdown-toggle" data-toggle="dropdown">
            Save Data
          </a>
        </li>
        <li role="separator" class="divider">
        <li @click="loadData">
          <a href="#"
              class="dropdown-toggle" data-toggle="dropdown">
            Load Data
          </a>
        </li>
      </ul>

    </li>

      <p class="navbar-text">Funds: {{ formattedFunds }}</p>
    </ul>

  </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      showSaveLoad: false,
      lastClicked: ''
    }
  },
  computed: {
    ...mapGetters(['formattedFunds', 'formattedAmount'])
  },
  methods: {
    saveData () {
      this.$emit('handleClick', 'saveData')
    },
    loadData () {
      this.$emit('handleClick', 'loadData')
    },
    endDay () {
      this.$emit('handleClick', 'endOfDay')
    }
  }
}
</script>

<style lang="css">
.navbar-text {
  font-weight: bold;
  font-size: 1.6rem;
}
.navbar-brand {
  padding: 0;
}
</style>
