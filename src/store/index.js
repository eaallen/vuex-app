import { createStore } from 'vuex'

export default createStore({
  // this is where your data goes that will be changing, just like react
  state: {
    count: 0,
    colorCode: '',
    loading: false,
  },

  // for methods that get data from the state
  getters: {
    squared({ count }) {
      return count * count
    }
  },

  // used to change the state. CANNOT BE ASYNC 
  mutations: {
    plus(state, num) {
      state.count += num
    },
    less(state, num) {
      state.count -= num
    },
    setColor(state, color) {
      state.colorCode = color
    },
    setLoading(state, bool) {
      state.loading = bool
    }
  },

  // Methods that can read state but not change it. Actions can be async, so call the async method from actions then call the mutation
  actions: {
    async plus({ commit, dispatch }) {
      commit('plus', await dispatch('randomNumber'))
    },
    async less({ commit, dispatch }) {
      commit('less', await dispatch('randomNumber'))
    },
    async randomNumber({ commit }) {
      commit('setLoading', true)
      let res = await fetch('https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new')
      commit('setLoading', false)
      return await res.json()
    }

  },

  // breack up the store into modeuls to have it's own state. (Organization)
  modules: {
  }
})

// async function randomNumber() {
//   let res = await fetch('https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new')
//   return await res.json()
// }
