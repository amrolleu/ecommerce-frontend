import axios from 'axios'

export const state = () => ({
  products: [],
})

export const actions = {
  async FETCH_PRODUCTS({ commit }) {
    const { data } = await axios.get(
      'http://localhost:1337/api/products/?populate=*'
    )
    console.log(data)
    commit('SET_PRODUCTS_TO_STATE', data.data)
    this.products = data.data
  },
}

export const mutations = {
  SET_PRODUCTS_TO_STATE(state, products) {
    state.products = products
  },
}

export const getters = {
  PRODUCTS: (state) => {
    return state.products
  },
}
