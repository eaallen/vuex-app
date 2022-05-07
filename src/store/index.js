import { createStore } from 'vuex'

export default createStore({
  // this is where your data goes that will be changing, just like react
  state: {
    count: 0,
    colorCode: '',
  },

  // for methods that get data from the state
  getters: {
    squared({count}){
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
    setColor(state, color){
      state.colorCode = color
    }
  },

  // Methods that can read state but not change it. Actions can be async, so call the async method from actions then call the mutation
  actions: {
    async plus({ commit }) {
      commit('plus', await randomNumber())
    },
    async less({commit}) {
      commit('less', await randomNumber())
    },
  },

  // breack up the store into modeuls to have it's own state. (Organization)
  modules: {
  }
})

async function randomNumber() {
  let res = await fetch('https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new')
  return await res.json()
}
