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
    showSaveLoad : {{ showSaveLoad }}
    lastClicked : {{ lastClicked }}

    <ul class="nav navbar-nav navbar-right">
      <li
          active-class="active"
          @click="endDay"
      >
        <a>End Day</a>
      </li>
      <li
          @click="toggleSaveLoad"
      >
        <a>Save & Load</a>
        <ul class="nar navbar-nav nav-pills" v-if="showSaveLoad">
          <li class="nav" @click="saveData">Save</li>
          <li class="nav" @click="loadData">Load</li>
        </ul>
      </li>
      <p class="navbar-text">Funds: ${{ '10.000' }}</p>
    </ul>

  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      showSaveLoad: false,
      lastClicked: ''
    }
  },
  methods: {
    toggleSaveLoad () {
      this.showSaveLoad = !this.showSaveLoad
      this.lastClicked = 'save&load'
    },
    saveData () {
      this.showSaveLoad = false
      this.lastClicked = 'save'
      alert('saveData')
    },
    loadData () {
      this.showSaveLoad = false
      this.lastClicked = 'load'
    },
    endDay () { alert('end day action') }
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
