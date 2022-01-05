// import axios from 'axios'

// export const state = () => ({
//   cart: [],
// })

// export const actions = {
//   async addToCart(context, payload) {
//     const { data } = await axios.post('http://localhost:1337/api/orders/', {
//       data: {
//         quantity: 2,
//         product_id: payload.id,
//         user_id: 2,
//         price: 9999,
//         clients_fullname: 'John',
//         address: '',
//         phone_number: '+79999999999',
//       },
//     })
//     console.log(data.data)
//     context.commit('setCart', data.data)
//   },
// }

// export const mutations = {
//   setCart(state, payload) {
//     state.cart.push(payload)
//   },
// }

// addCart(state) {
//   localStorage.setItem(state)
// },

// export const mutations = {
//   addToCart(state, payload) {
//     state.cart.push(payload)
//     console.log(payload.id)
//   },
// }
