import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const initialState = {
  stocks: [
    { id: 101, name: 'Datsun', price: 100 },
    { id: 102, name: 'Buick', price: 200 },
    { id: 103, name: 'Rover', price: 300 },
    { id: 104, name: 'Peugeot', price: 400 }
  ],
  portfolio: [
    { id: 101, quantity: 1 }
  ],
  transactions: [
    { id: 101, quantity: 1, price: 100 }
  ],
  funds: 9900
}

const getters = {
  // formattedAmount: (state, amount) => '$ ' + amount.toLocaleString('en')
  formattedFunds: (state, getters) => getters.formattedAmount(state.funds),
  formattedAmount: state => amount => '$ ' + amount.toLocaleString('en'),
  getStockFromId: state => findId => {
    return state.stocks.filter(stock => stock.id === findId)[0]
  },
  getPositionFromId: state => findId => {
    const position = state.portfolio.filter(position => position.id === findId)
    return position ? position[0] : { id: findId, quantity: 0 }
  },
  getTransactionsFromId: state => findId => {
    return state.transactions.filter(transaction => transaction.id === findId)
  }
}
const mutations = {
  changePosition: (state, payload) => {
    const position =
      state.portfolio.filter(position => position.id === payload.id)[0]
    if (position) {
      position.quantity += payload.quantity
      if (position.quantity === 0) {
        state.portfolio = state.portfolio
          .filter(position => position.id !== payload.id)
      }
    } else {
      state.portfolio.push(payload)
    }
    state.transactions.push({ ...payload })
    state.funds -= payload.quantity * payload.price
  },
  changeStockPrice: (state, payload) => {
    const stock = state.stocks.filter(stock => stock.id === payload.id)[0]
    stock.price += Math.round(payload.percentage / 100 * stock.price)
  },
  saveLoadedData: (state, payload) => {
    // state = { ...state, payload } // This does not work
    state.funds = payload.funds
    state.stocks = payload.stocks
    state.portfolio = payload.portfolio
    state.transactions = payload.transactions
  }
}
const actions = {
  handleTransaction: ({ commit }, payload) => {
    commit('changePosition', payload)
  },
  handleDayEnd: ({ state, commit }) => {
    state.stocks.map(stock => {
      const percentage = Math.round(Math.random() * 20) - 10
      commit('changeStockPrice', { id: stock.id, percentage })
    })
  },
  handleSaveData: ({state, commit}, resource) => {
    resource
      .update({}, {...state})
      .then(
        response => {
        },
        error => {
          console.log('error saving data', error)
        }
      )
  },
  handleLoadData: ({state, commit}, resource) => {
    resource
      .get({})
      .then(
        response => {
          commit('saveLoadedData', response.body)
        },
        error => {
          console.log('error loading data', error)
        }
      )
  }
}

export const store = new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations
})
