import Vue from 'vue'

const state = {

  tasks: {
    ID1: {
      name: 'Go to shop',
      completed: false,
      date: '30-10-2020',
      time: '14:00'
    },
    ID2: {
      name: 'Get bananas',
      completed: true,
      date: '21-10-2020',
      time: '15:00'
    },
    ID3: {
      name: 'Get apples',
      completed: false,
      date: '22-10-2020',
      time: '16:00'
    }
  }
}
const mutations = {
  updateTask (state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask (state, id) {
    console.log('deleted id : ', id)
    Vue.delete(state.tasks, id)
  }
}
const actions = {
  updateTask ({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask ({ commit }, id) {
    commit('deleteTask', id)
  }
}
const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namemespace: true,
  state,
  mutations,
  actions,
  getters
}
